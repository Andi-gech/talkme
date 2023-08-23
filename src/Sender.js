import React from 'react'
import { FaReply } from 'react-icons/fa'

export default function Sender({ image, text, pp, onclick,me,reply }) {
 
  return (
      <div className={`relative flex ${me?"flex-row self-end ":" flex-row-reverse"}  mt-4  w-fit h-fit`}>

      <div className={`flex  z-10 text-white group flex-col whitespace-pre-wrap  px-2  max-w-xs h-auto p-2  rounded-md  self-end ${me ? "bg-gradient-to-b to-red-500 from-purple-900 " : "  bg-zinc-900"}  `}>
      {reply&&    <div className=' p-2   w-24  flex flex-row  text-white rounded-md '>
          <div className=' w-fill  flex flex-row justify-between'><p className=' font-bold'>|</p><p className='px-2 line-clamp-1 overflow-hidden w-20'>{reply}</p></div></div>}
          <img src={image} className="w-full" />
            <pre className="  whitespace-pre-wrap">{text}</pre>
            <div
                  onClick={onclick}
                  className={`absolute -z-10 flex flex-col ${me?" -left-16  ":" -right-16"} bottom-2 text-black items-center rounded-md justify-center  shadow-md h-9  w-20  opacity-0 group-hover:opacity-100`}
            ><FaReply/>
            </div>
        </div>
        
        <img src={pp} className=" w-12 h-12 rounded-full" />
        
        </div>
  )
}
