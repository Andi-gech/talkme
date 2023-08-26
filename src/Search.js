import React from "react";
import { IoMdSearch } from "react-icons/io";
export default function Search() {
  return (
    <div className="  h-10  w-1/2 flex flex-row rounded-xl overflow-hidden mt-2 self-center flex-shrink-0">
      <div className="w-full h-full flex flex-row items-center dark:bg-zinc-800 bg-zinc-200 placeholder: text-white  ">
        <input className="w-full h-full bg-inherit" placeholder="search here" />
        <IoMdSearch size={30} color="white" className=" w-10  " />
      </div>
    </div>
  );
}
