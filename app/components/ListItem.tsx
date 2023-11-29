import { FileType } from "@/utils";
import React, { useState } from "react";
import { FaFileAlt, FaFolder } from "react-icons/fa";
import RenderFolderList from "./RenderFolderList";

function ListItem({ file }: { file: FileType }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li>
      {file.type === "folder" ? (
        <div className="">
          <div className=" cursor-pointer " onClick={() => setOpen(!open)}>
            <strong className=" inline-flex items-center gap-2">
              <FaFolder />
              {file.name}
            </strong>
          </div>
          {open ? (
            <>
              <RenderFolderList fileList={file.files || []} />
            </>
          ) : null}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <a href="#" className="inline-flex gap-2 items-center">
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
      )}
    </li>
  );
}

export default ListItem;
