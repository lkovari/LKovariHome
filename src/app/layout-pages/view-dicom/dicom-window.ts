import { DicomImage } from './dicom-parser';

function storedToValue(image: DicomImage, stored: number): number {
  const slope = image.rescaleSlope ?? 1;
  const intercept = image.rescaleIntercept ?? 0;
  return slope * stored + intercept;
}

export function windowToRgba(image: DicomImage): Uint8ClampedArray {
  const count = image.rows * image.columns;
  const values = new Float64Array(count);
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < count; i++) {
    const value = storedToValue(image, image.samples[i] ?? 0);
    values[i] = value;
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  }

  let low = min;
  let width = max - min;
  if (
    image.windowCenter !== undefined &&
    image.windowWidth !== undefined &&
    image.windowWidth > 0
  ) {
    low = image.windowCenter - image.windowWidth / 2;
    width = image.windowWidth;
  }
  if (width === 0) {
    width = 1;
  }

  const rgba = new Uint8ClampedArray(count * 4);
  for (let i = 0; i < count; i++) {
    const gray = Math.round((((values[i] ?? 0) - low) / width) * 255);
    const offset = i * 4;
    rgba[offset] = gray;
    rgba[offset + 1] = gray;
    rgba[offset + 2] = gray;
    rgba[offset + 3] = 255;
  }
  return rgba;
}

export function paintRgba(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  rgba: Uint8ClampedArray
): void {
  canvas.width = width;
  canvas.height = height;
  let ctx: CanvasRenderingContext2D | null = null;
  try {
    ctx = canvas.getContext('2d');
  } catch {
    return;
  }
  if (!ctx) {
    return;
  }
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(rgba);
  ctx.putImageData(imageData, 0, 0);
}
