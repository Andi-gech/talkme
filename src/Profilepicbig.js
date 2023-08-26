import React from "react";

export default function Profilepicbig({ image }) {
  return (
    <div className=" flex-1  flex items-center flex-col">
      <div className="border-2  h-40 w-40 p-2 flex items-center justify-center my-2 overflow-hidden   border-orange-500 rounded-full cursor-pointer">
        <img className=" object-fill rounded-full  h-36 w-36" src={image} />
      </div>
      <div className=" flex items-center justify-center flex-col">
        <p className=" font-bold dark:text-white  text-black text-lg">@Anduti23</p>
        <p className=" font-bold dark:text-white text-black  opacity-30 text-sm">@Anduti23</p>
      </div>
    </div>
  );
}
