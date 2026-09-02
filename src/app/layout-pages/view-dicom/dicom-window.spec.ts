import { windowToRgba } from './dicom-window';
import { DicomImage } from './dicom-parser';

function image(overrides: Partial<DicomImage> & { samples: Int16Array | Uint16Array }): DicomImage {
  return {
    rows: 1,
    columns: overrides.samples.length,
    bitsAllocated: 16,
    bitsStored: 16,
    pixelRepresentation: 1,
    photometricInterpretation: 'MONOCHROME2',
    windowCenter: undefined,
    windowWidth: undefined,
    rescaleSlope: undefined,
    rescaleIntercept: undefined,
    modality: undefined,
    seriesDescription: undefined,
    ...overrides,
  };
}

describe('windowToRgba', () => {
  it('maps stored values through rescale and window to 8-bit grayscale rgba', () => {
    const rgba = windowToRgba(
      image({
        samples: Int16Array.from([0, 50, 100]),
        rescaleSlope: 1,
        rescaleIntercept: 0,
        windowCenter: 50,
        windowWidth: 100,
      })
    );

    expect(Array.from(rgba.slice(0, 4))).toEqual([0, 0, 0, 255]);
    expect(Array.from(rgba.slice(4, 8))).toEqual([128, 128, 128, 255]);
    expect(Array.from(rgba.slice(8, 12))).toEqual([255, 255, 255, 255]);
  });

  it('stretches min to max when window tags are missing', () => {
    const rgba = windowToRgba(
      image({
        samples: Int16Array.from([10, 20]),
      })
    );

    expect(Array.from(rgba.slice(0, 4))).toEqual([0, 0, 0, 255]);
    expect(Array.from(rgba.slice(4, 8))).toEqual([255, 255, 255, 255]);
  });
});
