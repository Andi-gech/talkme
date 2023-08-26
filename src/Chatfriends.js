import React from 'react'
import Search from './Search'
import user9 from "./Assets/user9.jpg";
import {chatid,messages,replies,users} from "./Chatsdata"
import { useNavigate } from 'react-router-dom';
export default function Chatfriends() {
    const navigate = useNavigate()

    function handleClick(id) {
      navigate(`/chat/${id}`);
    }
  
  return (
      <div className='dark:bg-zinc-950 border-l-2 border-gray-400 border-opacity-20 bg-zinc-100  sm:w-1/2 w-full flex flex-col pl-2  '>
          <Search />
          <div className=' w-full flex  items-center flex-col items-cent h-full  mt-5 flex-nowrap overflow-scroll'>
              {users.map((user) => {
             
        return     <div onClick={()=>handleClick(user.id)}  className=' dark:bg-zinc-900 dark:shadow-gray-700 dark:text-white dark:hover:bg-zinc-800 cursor-pointer hover:bg-zinc-200 my-2 flex flex-row w-3/5 shadow-md  h-20 flex-shrink-0'>
             <img src={ user.profilePicture} className=' h-full w-20 rounded-full' />
             <div className=' flex flex-col justify-between ml-5'>
                 <p className=' font-bold'> {user.username}</p>
                 <p className=' text-sm' > atmetam enda sle man</p>
                 <p className=' text-xs'>19-23-2002</p>
         </div>
         </div>  
              })}
           
          </div>
          
   </div>
  )
}
