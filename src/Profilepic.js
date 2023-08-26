import React from "react";

export default function Profilepic({ seen, image, onclick }) {
  return (
    <div
      onClick={onclick}
      className={`border-2  h-13 w-13 p-1 my-2 sm:mx-0 mx-2 overflow-hidden flex-shrink-0   border-${
        seen ? "white" : "orange-500"
      } rounded-full cursor-pointer`}
    >
      <img className=" object-fill rounded-full h-12 w-12" src={image} />
    </div>
  );
}
