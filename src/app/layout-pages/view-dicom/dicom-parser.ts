export interface DicomImage {
  rows: number;
  columns: number;
  bitsAllocated: number;
  bitsStored: number;
  pixelRepresentation: number;
  photometricInterpretation: string;
  windowCenter: number | undefined;
  windowWidth: number | undefined;
  rescaleSlope: number | undefined;
  rescaleIntercept: number | undefined;
  modality: string | undefined;
  seriesDescription: string | undefined;
  samples: Int16Array | Uint16Array;
}

const VR_LEN32 = new Set(['OB', 'OD', 'OF', 'OL', 'OW', 'SQ', 'UC', 'UR', 'UT', 'UN', 'SV', 'UV']);
const EXPLICIT_LE = '1.2.840.10008.1.2.1';

function readAscii(bytes: Uint8Array, start: number, length: number): string {
  let text = '';
  for (let i = 0; i < length; i++) {
    text += String.fromCharCode(bytes[start + i] ?? 0);
  }
  return text;
}

function trimDicomString(value: string): string {
  return value.replace(/\0/g, '').trim();
}

function parseDs(value: string): number | undefined {
  const first = value.split('\\')[0];
  if (!first) {
    return undefined;
  }
  const parsed = Number.parseFloat(first);
  if (Number.isNaN(parsed)) {
    return undefined;
  }
  return parsed;
}

function skipUndefinedSequence(view: DataView, bytes: Uint8Array, start: number): number {
  let offset = start;
  while (offset + 8 <= bytes.length) {
    const group = view.getUint16(offset, true);
    const elem = view.getUint16(offset + 2, true);
    const length = view.getUint32(offset + 4, true);
    offset += 8;
    if (group === 0xfffe && elem === 0xe0dd) {
      return offset;
    }
    if (group === 0xfffe && elem === 0xe000) {
      if (length === 0xffffffff) {
        offset = skipUndefinedItem(view, bytes, offset);
      } else {
        offset += length;
      }
    } else if (length !== 0xffffffff) {
      offset += length;
    } else {
      return bytes.length;
    }
  }
  return offset;
}

function skipUndefinedItem(view: DataView, bytes: Uint8Array, start: number): number {
  let offset = start;
  while (offset + 8 <= bytes.length) {
    const group = view.getUint16(offset, true);
    const elem = view.getUint16(offset + 2, true);
    if (group === 0xfffe && elem === 0xe00d) {
      return offset + 8;
    }
    offset = skipExplicitElement(view, bytes, offset);
  }
  return offset;
}

function skipExplicitElement(view: DataView, bytes: Uint8Array, offset: number): number {
  const parsed = readExplicitElement(view, bytes, offset);
  if (parsed.vr === 'SQ' && parsed.length === 0xffffffff) {
    return skipUndefinedSequence(view, bytes, parsed.valueOffset);
  }
  if (parsed.length === 0xffffffff) {
    return bytes.length;
  }
  return parsed.valueOffset + parsed.length;
}

function readExplicitElement(
  view: DataView,
  bytes: Uint8Array,
  offset: number
): { group: number; elem: number; vr: string; length: number; valueOffset: number } {
  const group = view.getUint16(offset, true);
  const elem = view.getUint16(offset + 2, true);
  const vr = readAscii(bytes, offset + 4, 2);
  if (VR_LEN32.has(vr)) {
    const length = view.getUint32(offset + 8, true);
    return { group, elem, vr, length, valueOffset: offset + 12 };
  }
  const length = view.getUint16(offset + 6, true);
  return { group, elem, vr, length, valueOffset: offset + 8 };
}

export function parseDicom(buffer: ArrayBuffer): DicomImage {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  if (bytes.length < 132 || readAscii(bytes, 128, 4) !== 'DICM') {
    throw new Error('DICM prefix missing');
  }

  let offset = 132;
  let transferSyntax = '';
  let rows = 0;
  let columns = 0;
  let bitsAllocated = 0;
  let bitsStored = 0;
  let pixelRepresentation = 0;
  let photometricInterpretation = '';
  let windowCenter: number | undefined;
  let windowWidth: number | undefined;
  let rescaleSlope: number | undefined;
  let rescaleIntercept: number | undefined;
  let modality: string | undefined;
  let seriesDescription: string | undefined;
  let samples: Int16Array | Uint16Array | undefined;

  while (offset + 8 <= bytes.length) {
    const parsed = readExplicitElement(view, bytes, offset);
    if (parsed.vr === 'SQ') {
      if (parsed.length === 0xffffffff) {
        offset = skipUndefinedSequence(view, bytes, parsed.valueOffset);
      } else {
        offset = parsed.valueOffset + parsed.length;
      }
      continue;
    }
    if (parsed.length === 0xffffffff) {
      throw new Error('Unsupported undefined-length element');
    }
    const valueBytes = bytes.subarray(parsed.valueOffset, parsed.valueOffset + parsed.length);
    const tag = (parsed.group << 16) | parsed.elem;
    if (parsed.group === 0x0002 && parsed.elem === 0x0010) {
      transferSyntax = trimDicomString(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x00080060) {
      modality = trimDicomString(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x0008103e) {
      seriesDescription = trimDicomString(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x00280004) {
      photometricInterpretation = trimDicomString(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x00280010) {
      rows = view.getUint16(parsed.valueOffset, true);
    } else if (tag === 0x00280011) {
      columns = view.getUint16(parsed.valueOffset, true);
    } else if (tag === 0x00280100) {
      bitsAllocated = view.getUint16(parsed.valueOffset, true);
    } else if (tag === 0x00280101) {
      bitsStored = view.getUint16(parsed.valueOffset, true);
    } else if (tag === 0x00280103) {
      pixelRepresentation = view.getUint16(parsed.valueOffset, true);
    } else if (tag === 0x00281050) {
      windowCenter = parseDs(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x00281051) {
      windowWidth = parseDs(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x00281052) {
      rescaleIntercept = parseDs(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x00281053) {
      rescaleSlope = parseDs(readAscii(valueBytes, 0, valueBytes.length));
    } else if (tag === 0x7fe00010) {
      const copy = new Uint8Array(valueBytes);
      if (pixelRepresentation === 1) {
        samples = new Int16Array(copy.buffer, copy.byteOffset, Math.floor(copy.byteLength / 2));
      } else {
        samples = new Uint16Array(copy.buffer, copy.byteOffset, Math.floor(copy.byteLength / 2));
      }
    }
    offset = parsed.valueOffset + parsed.length;
    if (tag === 0x7fe00010) {
      break;
    }
  }

  if (transferSyntax && transferSyntax !== EXPLICIT_LE) {
    throw new Error('Unsupported transfer syntax');
  }
  if (photometricInterpretation !== 'MONOCHROME2') {
    throw new Error('Unsupported photometric interpretation');
  }
  if (bitsAllocated !== 16) {
    throw new Error('Unsupported bits allocated');
  }
  if (!samples || rows === 0 || columns === 0) {
    throw new Error('Missing pixel data');
  }

  return {
    rows,
    columns,
    bitsAllocated,
    bitsStored,
    pixelRepresentation,
    photometricInterpretation,
    windowCenter,
    windowWidth,
    rescaleSlope,
    rescaleIntercept,
    modality,
    seriesDescription,
    samples,
  };
}
