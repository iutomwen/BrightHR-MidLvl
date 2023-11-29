export type FileType = {
  type: string;
  name: string;
  added: string;
  files?: FileType[]; // Nested files for folders
};
