import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Headers() {
  return (
    <div className="  bg-zinc-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-black text-xl font-semibold flex flex-row">
          Lets Talk
          <FaMicrophone />
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-black hover:text-gray-300 cursor-pointer">
              <IoMdSettings size={25} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
