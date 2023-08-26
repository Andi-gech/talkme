import React, { useEffect, useState } from "react";
import { FaBars, FaLightbulb, FaMicrophone } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import useDarkSide from "./Usedarkside";

export default function Headers({onclicks}) {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className=" fixed  z-20 w-full dark:bg-zinc-900   bg-zinc-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="dark:text-white text-black text-xl font-semibold flex flex-row">
          Lets Talk
          <FaMicrophone />
        </a>
        <nav>
          <ul className=" space-x-4  sm:hidden flex flex-row ">
          <li onClick={toggleDarkMode} className=" dark:text-white text-black hover:text-gray-300 cursor-pointer">
             <FaLightbulb/>
            </li>
          <li onClick={onclicks} className=" dark:text-white text-black hover:text-gray-300 cursor-pointer">
              <FaBars size={25} />
            </li>
          </ul>
          <ul className="  space-x-4 sm:flex  hidden">
            <li className=" dark:text-white text-black hover:text-gray-300 cursor-pointer">
              <IoMdSettings size={25} />
            </li>
            <li onClick={toggleDarkMode} className=" dark:text-white text-black hover:text-gray-300 cursor-pointer">
            darkmode
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
