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
    <div className=" flex flex-col   my-6 w-2/3 h-fit">
      <div className=" flex flex-row  max-w-full max-h-fit">
        <img
          onClick={handleClick}
          className=" object-fill rounded-full h-10 w-10  cursor-pointer "
          src={poster.user.profilePicture}
        />
        <div className=" bg-zinc-100 shadow-gray-300 shadow-md h-auto rounded-xl    mt-4  p-2 text-black flex flex-col">
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
                  className="mx-2"
                  size={25}
                />
              ) : (
                <IoMdHeartEmpty
                  onClick={onheartclicked}
                  color="black"
                  className="mx-2"
                  size={25}
                />
              )}
            </div>
            <div className="flex flex-row items-center justify-center">
              {poster.likes}
              <FaComment
                color="black"
                className="mx-2"
                onClick={oncommentclicked}
                size={25}
              />
            </div>

            <FaShare color="black" className="mx-2" size={25} />
          </div>
          {isopend && (
            <>
              <div className="flex flex-row max-w-full  p-2  border-white border-b-2">
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
              <div className="flex flex-row max-w-full  p-2  border-white border-b-2">
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
