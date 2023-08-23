import React from "react";
import book4 from "./Assets/BOOK4.jpg";
export default function Popularslist() {
  return (
    <div className="bg-zinc-100  flex-1 flex flex-col scroll-m-3">
      <div className=" text-black ">
        <p>Suggestions</p>
      </div>
      <div
        className="h-1/4  flex justify-center items-center"
        style={{
          backgroundImage: `url(${book4})`,
          backdropFilter: "blur(18)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white flex justify-center h-full w-full backdrop-blur-sm items-center flex-col">
          Find Channels
          <div className=" bg-white h-10 w-1/2 flex items-center justify-center">
            <p className="text-black">Search </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 text-black  h-20 w-full flex items-center  justify-start flex-row">
        <div className="h-full w-20  flex items-center justify-center ">
          <img className=" h-16 w-16 rounded-full p-1" src={book4}></img>
        </div>
        <div>
          <h2 className="font-bold">channel 1</h2>
          <p>message from channel one</p>
        </div>
      </div>
      <div className=" bg-gray-100 text-black  h-20 w-full flex items-center  justify-start flex-row">
        <div className="h-full w-20  flex items-center justify-center ">
          <img className=" h-16 w-16 rounded-full p-1" src={book4}></img>
        </div>
        <div>
          <h2 className="font-bold">channel 2</h2>
          <p>message from channel one</p>
        </div>
      </div>
      <div className=" bg-gray-100 text-black  h-20 w-full flex items-center  justify-start flex-row">
        <div className="h-full w-20  flex items-center justify-center ">
          <img className=" h-16 w-16 rounded-full p-1" src={book4}></img>
        </div>
        <div>
          <h2 className="font-bold">channel 1</h2>
          <p>message from channel one</p>
        </div>
      </div>
      <div className=" text-black self-center">
        <p>more</p>
      </div>
    </div>
  );
}
