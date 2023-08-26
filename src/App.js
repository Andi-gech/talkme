import { FaAngleDoubleDown, FaHeart, FaPaperPlane } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import "./App.css";
import { useEffect, useState } from "react";

import Profilepic from "./Profilepic";

import Profilesidemenu from "./Profilesidemenu";

import Blogbody from "./Blogbody";
import { datas } from "./Storydata";
import Headers from "./Header";
import Popularslist from "./Popularslist";
import Explore from "./Explore";
import Chat from "./Chat";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Chatfriends from "./Chatfriends";

function App() {
  const [scroll, setscroll] = useState(0);
  const [storyactive, setstoryactive] = useState(false);
  const [storyindex, setstoryindex] = useState();
  const [menu, setmobilemenu] = useState(false);
  const [data, setdata] = useState(datas);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = data.findIndex((item) => item.id === storyindex);
      const nextIndex = (index + 1) % data.length;

      if (nextIndex === 0 || !storyactive) {
        clearInterval(interval);
        setstoryactive(false);
      } else {
        const nextStoryId = data[nextIndex].id;
        setstoryindex(nextStoryId);
        const updatedData = data.map((story) => ({
          ...story,
          seen: story.id === storyindex ? true : story.seen,
        }));

        setdata(updatedData);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [storyindex, data]);
  const location = useLocation();
  useEffect(() => {
    setmobilemenu(false)
  },[location.pathname])
 
  

  return (
    <div className=" sm:h-screen h-94vh w-screen flex flex-col" >
      <Headers onclicks={() => setmobilemenu(!menu)} />
      {!storyactive && <div style={{scrollbarWidth:1}} className=" mt-14  [&::-webkit-scrollbar]:[width:30px]
            [&::-webkit-scrollbar-thumb]:bg-zinc-100 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-900 dark:bg-zinc-900 bg-zinc-100 sc  sm:hidden h-24 w-full flex flex-row overflow-x-scroll">
        {data.map((story) => {
          return (
            <Profilepic
              seen={story.seen}
              image={story.img}
              onclick={() => {
                setstoryactive(true);

                setstoryindex(story.id);
                story.seen = true;
              }}
            />
          );
        })}
      </div>}
      <div className=" bg-red-500 sm:mt-14  h-full w-full flex overflow-hidden flex-row">
        
        <div className="dark:bg-zinc-900  sm:flex hidden bg-zinc-100   w-20  flex-col items-center justify-center ">
          {scroll > 0 && (
            <div
              onClick={() => {
                setscroll(scroll - 460);
              }}
              className=" border-t-2 border-zinc-900 w-20   opacity-70 flex flex-col items-center  cursor-pointer  z-10 bg-zinc-900"
            >
              <FaAngleDoubleDown color="gray" size={20} />
            </div>
          )}
          <div className=" relative h-4/5  w-20 ">
            <div
              className={`flex flex-col items-center justify-center  absolute  w-20 ease-out  duration-1000 left-0`}
              style={{ top: -scroll }}
            >
              {data.map((story) => {
                return (
                  <Profilepic
                    seen={story.seen}
                    image={story.img}
                    onclick={() => {
                      setstoryactive(true);

                      setstoryindex(story.id);
                      story.seen = true;
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div
            onClick={() => {
              console.log((data.length / 6 - 1) * 460, scroll);
              const length = Math.ceil(data.length / 6);
              setscroll(scroll < (length - 1) * 460 ? scroll + 460 : scroll);
            }}
            className=" dark:bg-zinc-900 dark:border-zinc-600 border-t-2 border-zinc-100 w-20 flex-1 flex flex-col items-center  cursor-pointer  z-10 bg-zinc-100"
          >
            <FaAngleDoubleDown color="gray" size={20} />
          </div>
        </div>

        <div className=" relative bg-red-200 sm:flex flex-1 z-50 flex flex-row">
          {storyactive && storyindex && (
            <div className="dark:bg-zinc-900 absolute top-0 z-50 bg-zinc-100  p-1  left-0 sm:w-1/4 w-full h-full">
              {data
                .filter((p) => p.id === storyindex)
                .map((p) => {
              
                  return (
                    <>
                      <div className=" absolute top-4 left-4 flex flex-row text-white items-center">
                        <img src={p.img} className="  h-12 w-12 rounded-full"   ></img>
                        <p>user{p.id}</p>
                        </div>
                    <img
                      src={p.story}
                      className=" object-fill  h-full w-full"
                    /></>
                  );
                })}

              <div className=" absolute bottom-0  p-1 left-0 w-full h-20 flex items-center">
                <FaHeart color="red" size={25} className="mx-1" />
                <input className="h-1/2 flex-1 rounded-full pl" />
                <div className="mx-1  bg-white h-10 w-10 flex items-center justify-center rounded-full">
                  <FaPaperPlane color="black" size={25} />
                </div>
              </div>
             
              <IoMdCloseCircle
                onClick={() => setstoryactive(false)}
                color="white"
                size={30}
                className=" absolute top-0 right-0"
              />
            </div>
          )}
          
          <Profilesidemenu ismenu={ menu} />
          
          <Routes>
            
              <Route index element={<Blogbody  />} />
              <Route path="chat/:id" element={<Chat />} />
              <Route path="chat" element={<Chatfriends/>} />
            <Route path="explore" element={<Explore />} />
            </Routes>
          
          <Popularslist />
        </div>
      </div>
    </div>
  );
}

export default App;
