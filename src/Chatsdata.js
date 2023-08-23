import user8 from "./Assets/user8.jpg";
import user9 from "./Assets/user10.jpg";
import user10 from "./Assets/user11.jpg";
export const users = [
    { id: 1, username: 'user1', profilePicture: user8 },
    { id: 2, username: 'user2', profilePicture: user9 },
    { id: 3, username: 'user3', profilePicture: user10 },
  ];
export  const chatid = [
    { id: 1, participant:[1,2] },
    { id: 2,participant:[2,3] },
  { id: 3, participant: [1, 3] },
  { id: 4, participant:[2,2] },
  ];
 export const messages = [
    { id: 1, senderId: 1, receiverId: 2, chatId: 1, content: 'Hey there!', timestamp: new Date('2023-08-23 10:00:00') },
    { id: 2, senderId: 2, receiverId: 1, chatId: 1, content: 'Hello!', timestamp: new Date('2023-08-23 10:05:00') },
    { id: 3, senderId: 2, receiverId: 3, chatId: 2, content: 'Meeting tomorrow?', timestamp: new Date('2023-08-23 11:00:00') },
    { id: 4, senderId: 3, receiverId: 1, chatId: 2, content: 'Yes, at 2 PM.', timestamp: new Date('2023-08-23 11:05:00') },
    { id: 5, senderId: 1, receiverId: 2, chatId: 1, content: 'How was your day?', timestamp: new Date('2023-08-23 12:00:00') },
    { id: 6, senderId: 2, receiverId: 1, chatId: 1, content: 'Pretty good, thanks!', timestamp: new Date('2023-08-23 12:05:00') },
    { id: 7, senderId: 3, receiverId: 1, chatId: 2, content: 'Looking forward to the meeting!', timestamp: new Date('2023-08-23 13:00:00') },
    { id: 8, senderId: 2, receiverId: 3, chatId: 2, content: 'Absolutely! See you there.', timestamp: new Date('2023-08-23 13:05:00') },
    { id: 9, senderId: 1, receiverId: 3, chatId: 3, content: 'Any movie recommendations?', timestamp: new Date('2023-08-23 15:00:00') },
   { id: 10, senderId: 3, receiverId: 1, chatId: 3, content: 'How about an action thriller?', timestamp: new Date('2023-08-23 15:05:00') },
   { id: 11, senderId: 2, receiverId: 2, chatId: 4, content: 'saved chats', timestamp: new Date('2023-08-23 15:05:00') },
  ];
  
