import { FileType } from "@/utils";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
function RenderFolderList({ fileList }: { fileList: FileType[] }) {
  return (
    <div className="w-full">
      <ul>
        {fileList.map((file, index) => (
          <li key={index}>
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <a href="#" className=" inline-flex gap-2 items-center">
                  {"-- "}
                  <FaFileAlt />
                  {`${file.name}`}
                </a>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-sm text-gray-400"> {file.type} </span>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-sm text-gray-400"> {file.added}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderFolderList;
