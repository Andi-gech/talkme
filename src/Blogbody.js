import React, { useState } from "react";

import Postcard from "./Postcard";
import { posts as post } from "./post";
import Search from "./Search";

export default function Blogbody() {
  const [likedPosts, setLikedPosts] = useState([]);
  const [posts, setposts] = useState(post);

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };
  const [openedboxs, setopenedboxs] = useState([]);

  const toggleopenbox = (postId) => {
    if (openedboxs.includes(postId)) {
      setopenedboxs(openedboxs.filter((id) => id !== postId));
    } else {
      setopenedboxs([...openedboxs, postId]);
    }
  };
  return (
    <div className="  dark:bg-zinc-950 border-l-2 scroll-px-5 sm:w-1/2    border-gray-400 border-opacity-20 bg-zinc-100   flex flex-col pl-2  overflow-y-auto  ">
      <Search />
      {posts.map((p) => {
        const isLiked = likedPosts.includes(p.id);
        const isopend = openedboxs.includes(p.id);
        return (
          <Postcard
            onheartclicked={() => toggleLike(p.id)}
            oncommentclicked={() => toggleopenbox(p.id)}
            poster={p}
            isLiked={isLiked}
            isopend={isopend}
          />
        );
      })}

      <div className=" self-center mb-10"></div>
    </div>
  );
}
