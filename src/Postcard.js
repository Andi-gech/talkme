import React from "react";
import { FaComment, FaShare } from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";

export default function Postcard({
  poster,
  isLiked,
  isopend,
  onheartclicked,
  oncommentclicked,
}) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`chat/${poster.user.id}`);
  }

  return (
    <div className=" flex flex-col sm:w-2/3 sm:px-0 px-2  my-6 h-fit">
      <div className=" flex flex-row  max-w-full max-h-fit">
        <img
          onClick={handleClick}
          className=" object-fill rounded-full h-10 w-10  cursor-pointer "
          src={poster.user.profilePicture}
        />
        <div className=" dark:bg-zinc-900 dark:shadow-gray-700 dark:text-white bg-zinc-100 shadow-gray-300 shadow-md h-auto rounded-xl    mt-4  p-2 text-black flex flex-col">
          {poster.image && (
            <img src={poster.image} className=" h-auto  max-w-full " />
          )}
          <div>
            <p>{poster.text} </p>
            <p className=" text-blue-500">{poster.hashtag}</p>
          </div>

          <div className="flex flex-row max-w-full  self-end  mb-7">
            <div className="flex flex-row items-center justify-center">
              {isLiked ? poster.likes + 1 : poster.likes}
              {isLiked ? (
                <IoMdHeart
                  onClick={onheartclicked}
                  color="red"
                  className="mx-2 "
                  size={25}
                />
              ) : (
                <IoMdHeartEmpty
                  onClick={onheartclicked}
               
                  className="mx-2 dark:text-white "
                  size={25}
                />
              )}
            </div>
            <div className="flex flex-row items-center justify-center">
              {poster.likes}
              <FaComment
                
                className="mx-2 dark:text-white"
                onClick={oncommentclicked}
                size={25}
              />
            </div>

            <FaShare  className="mx-2 dark:text-white" size={25} />
          </div>
          {isopend && (
            <>
              <div className="flex flex-row max-w-full  p-2  dark:border-zinc-800 border-white border-b-2">
                <div className="flex flex-row items-center justify-center">
                  <img 
                    
                    className=" m-2 object-fill rounded-full h-10 w-10 self-start  "
                    src={poster.user.profilePicture}
                  />
                  <div className="flex flex-col items-start">
                    <p className=" font-bold">andi</p>
                    thank you for the comments::
                  </div>
                </div>
              </div>
              <div className="flex flex-row max-w-full  p-2  dark:border-zinc-800 border-white border-b-2">
                <div className="flex flex-row items-center justify-center">
                  <img
                    className=" m-2 object-fill rounded-full h-10 w-10 self-start  "
                    src={poster.user.profilePicture}
                  />
                  <div className="flex flex-col items-start">
                    <p className=" font-bold">andi</p>
                    thank you for the comments:: sdsd dsdsdd dsdsd sdsd sd
                    sddsdds sdsdsd dsdssd dfddfdffd dffd dfdf dfdf dfd ddffd dfd
                    fd
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
