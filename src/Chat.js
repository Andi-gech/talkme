import React, { useEffect, useRef, useState } from "react";
import user3 from "./Assets/user3.jpg";
import atlets from "./Assets/photo_2023-08-19_23-07-26.jpg";
import { FaFile, FaPaperPlane, FaReply, FaShare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Sender from "./Sender";
import Reciver from "./Reciver";
import {chatid,messages,replies,users} from "./Chatsdata"
import { useParams } from "react-router-dom";
const data = `hello andi endet neh ene betam dena negn aleh
mn ?
`;

export default function Chat() {
  const [reply, setreply] = useState();
  const [chatUsers, setChatUsers] = useState([]);
  const [message, setmessages] = useState([]);
  const [chatroomid, setchatid] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [message]);
    const [pic, setInputpic] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const senmessage = () => {
    setmessages([
      ...message, { id: 324, images: pic, senderId: me, receiverId: 2, chatId: 1, content: inputValue, timestamp: new Date('2023-08-23 10:00:00'), replyto: { id:reply?.id,content:reply?.post} },
  
    ])
    setInputpic(null)
    setInputValue('')
    setreply(null)
  }
  const me = 1
  const handleKeyDown = (event) => {
    if (event.key === 'enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent the default behavior (newline)
      senmessage(); // Call the message sending function
    }
  };
  
  console.log(pic)
const  { id } = useParams();
  
  useEffect(() => { 
    getUsersFromChat()
   let room= getchatroom(id)
    getmessageFromChat(room)
   
  }, id)
  useEffect(() => { 
  
 
    getmessageFromChat(chatroomid)
   
  }, [chatroomid])
   const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
   const objectUrl = URL.createObjectURL(selectedFile);
      setInputpic(objectUrl);
  };
  function getUsersFromChat() {
    const chat = chatid.find(chat => chat.id === 2);
  
    if (chat) {
      const participantIds = chat.participant;
     
      const participants = users.filter(user => participantIds.includes(user.id));
      setChatUsers(participants);
      console.log(chatUsers)
    }
  
    return [];
  }
  function getchatroom(data) {
  
    let id = Number(data)
    let room

    if (id !== me) {
     room=  chatid.filter(chat =>
        chat.participant.includes(id) && chat.participant.includes(me)
    
     
      )
      
    } else {
       room=  chatid.filter(chat =>
        chat.participant[0] == id && chat.participant[0] == me&& chat.participant[1] == id
      )
    
    }
    console.log(room,"room")
    setchatid(room[0]?.id)
    
    
    return room[0]?.id 
  
  }
  function getmessageFromChat(ids) {
   
     console.log(ids,"id")
      const allmessgaes = messages.filter(m => m.chatId == chatroomid);
      console.log(allmessgaes)
      setmessages(allmessgaes);
    
  
  
  }
  
  return (
    <div className=" border-l-2  border-gray-400 border-opacity-20 bg-zinc-100  w-1/2 flex flex-col pl-2 pr-2  overflow-y-auto  ">
      <div className="flex  flex-1 flex-col h-full overflow-y-scroll" ref={chatContainerRef}>
        {message.map((m) => {
      

         return <Sender reply={m.replyto?.content} me={m.senderId==me?true:false} onclick={() => setreply({ post: m.content ,id:m.id})} image={m.images} pp={chatUsers[0].id==m.senderId?chatUsers[0].profilePicture:chatUsers[1].profilePicture}  text={m.content}/>
  
       })}
      </div>
    
      <div>
      {reply && (
          <div className=" justify-between flex items-center    rounded-lg bg-gradient-to-b to-red-300 from-purple-300 border-b-2 border-white w-1/3 h-10">
            <div className="flex flex-row items-center justify-center">
              <FaReply />
              <p className="w-3/4  text-black  line-clamp-1 ">{reply.post}</p>
            </div>
            <div onClick={() => setreply()}>
              <IoMdClose />
            </div>
          </div>
        )}
      {pic && <div className=" self-center"> <img src={pic} className="  h-40  w-40" /><p className=" w-40 line-clamp-2">{inputValue }</p></div>}
     
        </div>
      <div className="relative    p-1 w-full  flex items-center">
        <div className=" flex flex-1 flex-col" >
        
        <textarea  value={inputValue}  onChange={handleChange} className=" px-3 pt-1 z-10 h-1/2 bg-zinc-300 focus: outline-none flex-1 rounded-full pl" />
       </div> <div className="mx-1 bg-gradient-to-b to-red-500 from-purple-900 h-10 w-10 flex items-center justify-center rounded-full">
          <FaFile onClick={handleIconClick} />
           <input
        type="file"
        ref={fileInputRef}
            style={{ display: 'none' }}
            onKeyDown={handleKeyDown}
        onChange={handleFileChange}
      />
        </div> 
        <div className="mx-1 bg-gradient-to-b to-red-500 from-purple-900 h-10 w-10 flex items-center justify-center rounded-full">
          <FaPaperPlane
            color="white"
            onClick={senmessage}
            className="bg-gradient-to-b to-red-500 from-purple-900"
            size={25}
          />
        </div>
      
      </div>
    </div>
  );
}
