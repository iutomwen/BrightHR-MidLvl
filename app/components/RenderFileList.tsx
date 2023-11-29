import React from "react";
import { FileType } from "@/utils";
import ListItem from "./ListItem";
export const RenderFileList = ({ fileList }: { fileList: FileType[] }) => {
  return (
    <div className="w-full">
      <ul>
        {fileList.map((file, index) => (
          <ListItem file={file} key={index} />
        ))}
        {fileList.length === 0 ? (
          <div className="w-full flex justify-center items-center p-10">
            <span className="text-gray-400">No files found</span>
          </div>
        ) : null}
      </ul>
    </div>
  );
};
