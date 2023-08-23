import React from 'react'

export default function Reciver({image,text,pp,onclick}) {
  return (
    <div className="relative flex flex-row w-fit h-fit ">
    <img src={pp} className="w-12 h-12 rounded-full" />
    <div className="flex text-white flex-col group whitespace-pre-wrap px-2 m-2 max-w-xs h-auto p-2 rounded-md mt-2 self-end bg-zinc-900  duration-75  ">
      <img
        src={image}
        className="w-full hover:scale-105 duration-75 hover:brightness-50"
      />
      <pre className="whitespace-pre-wrap">{text}</pre>
      <div
        onClick={onclick}
        className="absolute flex flex-col bg-zinc-900 text-white items-center rounded-md justify-center -right-24 shadow-md h-9 w-28 bottom-2 opacity-0 group-hover:opacity-100"
      >
        <p>share</p>
      </div>
    </div>
  </div>
  )
}
