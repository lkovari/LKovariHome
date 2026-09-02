import { parseDicom } from './dicom-parser';
import { buildExplicitLeDicom } from './dicom-test-helpers';

describe('parseDicom', () => {
  it('reads rows, columns, labels, and signed pixel samples from explicit VR little endian', () => {
    const samples = Int16Array.from([10, 20, 30, 40]);
    const buffer = buildExplicitLeDicom({
      rows: 2,
      columns: 2,
      samples,
      modality: 'CT',
      seriesDescription: 'Scout',
      includeSequence: true,
      windowCenter: '50',
      windowWidth: '100',
      rescaleIntercept: '-1024',
      rescaleSlope: '1',
    });

    const image = parseDicom(buffer);

    expect(image.rows).toBe(2);
    expect(image.columns).toBe(2);
    expect(image.modality).toBe('CT');
    expect(image.seriesDescription).toBe('Scout');
    expect(image.photometricInterpretation).toBe('MONOCHROME2');
    expect(image.bitsAllocated).toBe(16);
    expect(image.pixelRepresentation).toBe(1);
    expect(image.windowCenter).toBe(50);
    expect(image.windowWidth).toBe(100);
    expect(image.rescaleIntercept).toBe(-1024);
    expect(image.rescaleSlope).toBe(1);
    expect(Array.from(image.samples)).toEqual([10, 20, 30, 40]);
  });

  it('rejects a buffer without a DICM prefix', () => {
    expect(() => parseDicom(new ArrayBuffer(64))).toThrow('DICM');
  });
});
