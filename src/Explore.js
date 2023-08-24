import React, { useState } from "react";
import Search from "./Search";
import user7 from "./Assets/user7.jpg";
import user8 from "./Assets/photo_2023-08-19_23-07-20.jpg";
import r from "./Assets/R.jpg";
import beach from "./Assets/beach.jpg";
import forest from "./Assets/forst.jpg";
import john_doe from "./Assets/forst.jpg";
import burger from "./Assets/burger.jpg";
import art from "./Assets/art.jpg";
import mountain from "./Assets/mountain.jpg";
import nature from "./Assets/nature.jpg";
import jog from "./Assets/jog.jpg";
import user1 from "./Assets/user1.jpg";
import user2 from "./Assets/user2.jpg";
import user3 from "./Assets/user3.jpg";
import atlets from "./Assets/photo_2023-08-19_23-07-26.jpg";
import { posts as post } from "./post";
import user9 from "./Assets/user9.jpg";
import user10 from "./Assets/user10.jpg";
import tikvah from "./Assets/tikvah.jpg";
import user12 from "./Assets/user12.jpg";
import user13 from "./Assets/user13.jpg";
export default function Explore() {
  const [posts, setposts] = useState(post);


  return (
    <div className=" border-l-2 border-gray-400 border-opacity-20 bg-zinc-100  w-1/2 flex flex-col pl-2  overflow-y-auto  ">
      <Search />
      <div className="  grid grid-cols-3  grid-rows-none grid-flow-row-dense ">
        {posts.map((p, index) => {
          return  (index % 3 === 0) ? <div><img
          src={p.image}
          className=" hover:brightness-50 hover:scale-105 p-1 duration-75  rounded-lg overflow-hidden  cursor-pointer "
          />
            <img
          src={posts[index+1]?.image}
          className=" hover:brightness-50 hover:scale-105 p-1 duration-75  rounded-lg overflow-hidden  cursor-pointer "
            />
            <img
          src={posts[index+2]?.image}
          className=" hover:brightness-50 hover:scale-105 p-1 duration-75  rounded-lg overflow-hidden  cursor-pointer "
          />
            
          </div>:null
        })}
       
          
      </div>
    </div>
  );
}
