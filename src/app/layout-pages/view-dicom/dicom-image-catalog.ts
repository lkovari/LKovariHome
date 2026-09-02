export interface DicomCatalogEntry {
  id: string;
  url: string;
}

export const DICOM_IMAGE_CATALOG: DicomCatalogEntry[] = [
  { id: 'st000000-se000000', url: 'assets/bigfiles/dicom/PA000000/ST000000/SE000000/IM000000' },
  { id: 'st000000-se000001', url: 'assets/bigfiles/dicom/PA000000/ST000000/SE000001/IM000000' },
  { id: 'st000000-se000002', url: 'assets/bigfiles/dicom/PA000000/ST000000/SE000002/IM000000' },
  { id: 'st000000-se000003', url: 'assets/bigfiles/dicom/PA000000/ST000000/SE000003/IM000000' },
  { id: 'st000000-se000004', url: 'assets/bigfiles/dicom/PA000000/ST000000/SE000004/IM000000' },
  { id: 'st000001-se000000', url: 'assets/bigfiles/dicom/PA000000/ST000001/SE000000/IM000000' },
  { id: 'st000001-se000001', url: 'assets/bigfiles/dicom/PA000000/ST000001/SE000001/IM000000' },
  { id: 'st000001-se000003', url: 'assets/bigfiles/dicom/PA000000/ST000001/SE000003/IM000000' },
  { id: 'st000001-se000004', url: 'assets/bigfiles/dicom/PA000000/ST000001/SE000004/IM000000' },
  { id: 'st000001-se000005', url: 'assets/bigfiles/dicom/PA000000/ST000001/SE000005/IM000000' },
];
