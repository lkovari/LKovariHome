const VR_LEN32 = new Set(['OB', 'OW', 'SQ', 'UN', 'UT', 'OD', 'OF', 'OL', 'UC', 'UR', 'SV', 'UV']);

function concat(chunks: Uint8Array[]): Uint8Array {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }
  return out;
}

function padEven(bytes: Uint8Array, pad: number): Uint8Array {
  if (bytes.length % 2 === 0) {
    return bytes;
  }
  const padded = new Uint8Array(bytes.length + 1);
  padded.set(bytes);
  padded[bytes.length] = pad;
  return padded;
}

function element(group: number, elem: number, vr: string, value: Uint8Array): Uint8Array {
  const even = padEven(value, vr === 'UI' ? 0 : 0x20);
  const headerSize = VR_LEN32.has(vr) ? 12 : 8;
  const header = new Uint8Array(headerSize);
  const view = new DataView(header.buffer);
  view.setUint16(0, group, true);
  view.setUint16(2, elem, true);
  header[4] = vr.charCodeAt(0);
  header[5] = vr.charCodeAt(1);
  if (VR_LEN32.has(vr)) {
    view.setUint32(8, even.length, true);
  } else {
    view.setUint16(6, even.length, true);
  }
  return concat([header, even]);
}

function us(group: number, elem: number, value: number): Uint8Array {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return element(group, elem, 'US', bytes);
}

function text(group: number, elem: number, vr: string, value: string): Uint8Array {
  return element(group, elem, vr, new TextEncoder().encode(value));
}

function owPixels(samples: Int16Array): Uint8Array {
  const copy = new ArrayBuffer(samples.byteLength);
  new Uint8Array(copy).set(new Uint8Array(samples.buffer, samples.byteOffset, samples.byteLength));
  return element(0x7fe0, 0x0010, 'OW', new Uint8Array(copy));
}

function fileMeta(transferSyntax: string): Uint8Array {
  const transfer = element(0x0002, 0x0010, 'UI', new TextEncoder().encode(transferSyntax));
  const lengthBytes = new Uint8Array(4);
  new DataView(lengthBytes.buffer).setUint32(0, transfer.length, true);
  const groupLength = element(0x0002, 0x0000, 'UL', lengthBytes);
  return concat([groupLength, transfer]);
}

export function buildExplicitLeDicom(options: {
  rows: number;
  columns: number;
  samples: Int16Array;
  modality?: string;
  seriesDescription?: string;
  pixelRepresentation?: number;
  windowCenter?: string;
  windowWidth?: string;
  rescaleIntercept?: string;
  rescaleSlope?: string;
  includeSequence?: boolean;
  transferSyntax?: string;
}): ArrayBuffer {
  const preamble = new Uint8Array(132);
  preamble[128] = 0x44;
  preamble[129] = 0x49;
  preamble[130] = 0x43;
  preamble[131] = 0x4d;
  const parts: Uint8Array[] = [
    preamble,
    fileMeta(options.transferSyntax ?? '1.2.840.10008.1.2.1'),
  ];
  if (options.modality) {
    parts.push(text(0x0008, 0x0060, 'CS', options.modality));
  }
  if (options.seriesDescription) {
    parts.push(text(0x0008, 0x103e, 'LO', options.seriesDescription));
  }
  if (options.includeSequence) {
    const itemContent = text(0x0008, 0x0100, 'SH', 'DUMMY');
    const itemHeader = new Uint8Array(8);
    const itemView = new DataView(itemHeader.buffer);
    itemView.setUint16(0, 0xfffe, true);
    itemView.setUint16(2, 0xe000, true);
    itemView.setUint32(4, itemContent.length, true);
    parts.push(element(0x0008, 0x1140, 'SQ', concat([itemHeader, itemContent])));
  }
  parts.push(us(0x0028, 0x0002, 1));
  parts.push(text(0x0028, 0x0004, 'CS', 'MONOCHROME2'));
  parts.push(us(0x0028, 0x0010, options.rows));
  parts.push(us(0x0028, 0x0011, options.columns));
  parts.push(us(0x0028, 0x0100, 16));
  parts.push(us(0x0028, 0x0101, 16));
  parts.push(us(0x0028, 0x0102, 15));
  parts.push(us(0x0028, 0x0103, options.pixelRepresentation ?? 1));
  if (options.windowCenter) {
    parts.push(text(0x0028, 0x1050, 'DS', options.windowCenter));
  }
  if (options.windowWidth) {
    parts.push(text(0x0028, 0x1051, 'DS', options.windowWidth));
  }
  if (options.rescaleIntercept) {
    parts.push(text(0x0028, 0x1052, 'DS', options.rescaleIntercept));
  }
  if (options.rescaleSlope) {
    parts.push(text(0x0028, 0x1053, 'DS', options.rescaleSlope));
  }
  parts.push(owPixels(options.samples));
  const bytes = concat(parts);
  const copy = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(copy).set(bytes);
  return copy;
}
