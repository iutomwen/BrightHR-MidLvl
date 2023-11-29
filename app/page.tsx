"use client";
import { FileType } from "@/utils";
import React, { useState, useEffect } from "react";
import data from "@/data.json";
import { RenderFileList } from "./components/RenderFileList";
const Home = () => {
  const [files, setFiles] = useState<FileType[]>(data as FileType[]);
  const [sortOption, setSortOption] = useState<string>("name");
  const [filterValue, setFilterValue] = useState<string>("");

  useEffect(() => {
    // Sort files based on the selected input
    const sortedFiles = [...files].sort((a, b) => {
      // @ts-ignore: Unreachable code error
      if (a[sortOption] < b[sortOption]) return -1;
      // @ts-ignore: Unreachable code error
      if (a[sortOption] > b[sortOption]) return 1;
      return 0;
    });

    // Search for filename
    const filteredFiles = sortedFiles.filter((file) =>
      file.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    setFiles(filteredFiles);
  }, [sortOption, filterValue]);

  useEffect(() => {
    if (filterValue.trim() === "") {
      setFiles(data as FileType[]);
      return;
    }
  }, [filterValue]);

  return (
    <div className="w-full gap-2 flex flex-col">
      <div className="md:flex md:flex-row flex-col space-y-2 md:space-y-0 justify-between border rounded-lg px-3 py-5 gap-3 items-center">
        <div className="md:w-10/12 w-full inline-flex items-center gap-3">
          <label htmlFor="sort">Order by:</label>
          <select
            className="flex-1 border rounded-md px-5 py-1 w-full focus:outline-none"
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="added">Date</option>
            <option value="type">Type</option>
          </select>
        </div>

        <div className="w-full inline-flex items-center gap-3">
          <label htmlFor="filter">Filter by:</label>
          <input
            type="text"
            id="filter"
            className="flex-1 border rounded-md px-5 py-1 focus:outline-none"
            placeholder="Enter filename"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-col justify-between border rounded-lg px-10 py-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <span className="text-sm font-bold text-gray-800"> Name </span>
          </div>
          <div className="col-span-1 text-right">
            <span className="text-sm font-bold text-gray-800"> Type </span>
          </div>
          <div className="col-span-1 text-right">
            <span className="text-sm font-bold text-gray-800"> Date </span>
          </div>
        </div>
        <RenderFileList fileList={files} />
      </div>
    </div>
  );
};

export default Home;
