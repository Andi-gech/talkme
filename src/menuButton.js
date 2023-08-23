import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function MenuButton({ icon, name,param }) {
  return (
    <Link to={param} className=" bg-gray-100 h-14 my-2 flex flex-row items-center justify-center hover:bg-gray-200 cursor-pointer">
      {icon}
  
      <p className="font-bold  text-black mx-4">{name}</p>
    </Link>
  );
}
