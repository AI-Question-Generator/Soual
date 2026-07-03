export interface SourceFileResponse {
  id: string;
  fileName: string;
  fileUrl: string;
  fileHash: string;
  fileSize: number;
  pageCount: number;
  fileType: string;
  uploadedAt: string;
}

export interface SourceFileDto {
  file: string;
}
