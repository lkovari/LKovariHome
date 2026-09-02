import { DICOM_IMAGE_CATALOG } from './dicom-image-catalog';

describe('DICOM_IMAGE_CATALOG', () => {
  it('lists the ten local DICOM instances in patient-study-series order', () => {
    expect(DICOM_IMAGE_CATALOG).toHaveLength(10);
    expect(DICOM_IMAGE_CATALOG.map(entry => entry.url)).toEqual([
      'assets/bigfiles/dicom/PA000000/ST000000/SE000000/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000000/SE000001/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000000/SE000002/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000000/SE000003/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000000/SE000004/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000001/SE000000/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000001/SE000001/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000001/SE000003/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000001/SE000004/IM000000',
      'assets/bigfiles/dicom/PA000000/ST000001/SE000005/IM000000',
    ]);
  });
});
