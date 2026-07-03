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

export interface SourceFile {
  id: string;
  file?: string;
  file_hash: string;
  file_url: string;
  file_name: string;
  file_type: string;
  file_size: number;
  page_count: number;
  uploaded_at: string;
  owner: number;
}

export interface SourceFileDto {
  file?: string;
  fileName: string;
  fileType: string;
}

export type SourceFilePatchDto = Partial<SourceFileDto>;
