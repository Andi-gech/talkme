import React from "react";
import atlets from "./Assets/photo_2023-08-19_23-07-20.jpg";
import { FaBlog, FaSearch, FaVideo } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import Profilepicbig from "./Profilepicbig";
import MenuButton from "./menuButton";
export default function Profilesidemenu() {
  return (
    <div className="bg-zinc-100  border-l-2 border-gray-400 border-opacity-20 flex-1 flex  flex-col items-center justify-between">
      <Profilepicbig image={atlets} />
      <div className="  h-1/2 w-full">
        <MenuButton param={""} icon={<FaBlog color="black" />} name={"Blogs"} />

        <MenuButton param={'explore'} icon={<FaSearch color="black" />} name={"explore"} />

        <MenuButton
          param={'chat'}
          icon={<IoMdChatbubbles color="black" />}
          name={"Lets talk"}
        />
        <MenuButton param={'golive'} icon={<FaVideo color="black" />} name={"Go live"} />
      </div>
    </div>
  );
}
