import React from "react";
import atlets from "./Assets/photo_2023-08-19_23-07-20.jpg";
import { FaBlog, FaSearch, FaVideo } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import Profilepicbig from "./Profilepicbig";
import MenuButton from "./menuButton";
export default function Profilesidemenu({ismenu}) {
  return (
    <div className={` ${ismenu?' translate-x-0':'translate-x-full'} sm:translate-x-0 sm:z-0 z-50 ease-out duration-150 sm:relative  absolute dark:bg-zinc-900 sm:flex  w-full h-full  bg-zinc-100  border-l-2 border-gray-400 border-opacity-20 flex-1  flex-col items-center justify-between`}>
      <Profilepicbig image={atlets}  />
      <div className="  h-1/2 w-full">
        <MenuButton param={""} icon={<FaBlog className=" dark:text-white" />} name={"Blogs"} />

        <MenuButton  param={'explore'} icon={<FaSearch className=" dark:text-white" />} name={"explore"} />

        <MenuButton
          param={'chat'}
          icon={<IoMdChatbubbles className=" dark:text-white" />}
          name={"Lets talk"}
        />
        <MenuButton param={'golive'} icon={<FaVideo className=" dark:text-white" />} name={"Go live"} />
      </div>
    </div>
  );
}
