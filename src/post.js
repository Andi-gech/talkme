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
import user7 from "./Assets/user7.jpg";
import user8 from "./Assets/user8.jpg";
import user9 from "./Assets/user9.jpg";
import user10 from "./Assets/user10.jpg";
import tikvah from "./Assets/tikvah.jpg";
import user12 from "./Assets/user12.jpg";
import user13 from "./Assets/user13.jpg";

export const posts = [
  {
    id: 1,
    user: {

      username: "john_doe",
      fullName: "John Doe",
      profilePicture: john_doe,
      id:1,
    },
    image: beach,
    text: "Enjoying a sunny day at the beach! 🏖️",
    likes: 120,
    hashtag: "#beach #vacation #sunnyday",
  },
  {
    id: 11,
    user: {
   
      username: "david_wilson",
      fullName: "David Wilson",
      profilePicture: tikvah,
      id:1,
    },
    image: atlets,
    text: '" የህዝባችን ፀሎት ሰምሯል " - ጉዳፍ ፀጋይ የወርቅ አሸናፊዋ አትሌት ጉዳፍ ፀጋይ ከድሏ በኃላ ስለ ቡድን ስራ እንዲሁም ደግሞ አጠቃላይ የተሰማትን ስሜት ተጠይቃ ተከታዩን ብላለች። ጉዳፍ ፀጋይ ፦" ተነጋግረን ነበር የገባነው። ዋናው ነገር #ወርቁን ማምጣት ስለሆነ ተነጋግረን እኔ 16 እና 17 ፤ ከዛ ሁለት ዙር ሲቀር በራሳችንን አቅም መሄድ ነበርና ወርቁ ከራሳችን እንዳይወጣ ነበር ጥረት ስናደርግ የነበረው።እግዚአብሔርም ሲጨመርበት ነውና ውጤት የሚያምረው የህዝባችን ፀሎት ሰምሯል። " ጉዳፍ ውድድሩን በበላይነት ያጠናቀቀችው እግሯ እየደማ ሲሆን ይህ እንዴት እንደተፈጠረ ተጠይቃ መልሳለች። " ሩጫ ላይ እንዲህ ያለው ነገር ያጋጥማል። በሩጫው መሃል ላይ ተነክቼ ነው እንደዛ የሆነው። 17 ወይም 18 ላልፍ አካባቢ ነው እግሬ የደማው " ብላለች። ምናልባት ሲፋን ሀሰን ባትወድቅ ኖሮ ውጤቱ ይቀየር ነበር ? ተብላ ተጠይቃም መልሳለች። ጉዳፍ ፀጋይ ፥ " እኔ እስከመጨረሻው ድረስ በጭራሽ እጅ አልሰጥም ብዬ ነው የገባሁት። ምክንያቱም እኔ ህዝቤ ይደግፈኛል ከሚገባው በላይ ፤ ወርቅ ማምጣት ምን ያህል እንደሆነ የህዝቡን ስሜት አይቻለሁ ፤ ከጎኔ ሆነው የሚደግፉኝ የኢትዮጵያ ህዝብ አሉና እነሱን ለማስደሰት ፣ ለራሴም ታሪክ ስለሆነ እስከመጨረሻው ተስፋ አልቆረጥኩም " ብላለች።ሲፋን ሀሰን ምን አለች ? በመጨረሻ ጥቂት ሰደንዶች ላይ ወድቃ ተሸናፊ የሆነችው ሲፋን ሀሰን " ተገፍቼ ነበር " ስትል ቃሏል ለቢቢሲ ሰጥታለች።" እሷ ወደ ውጭ እየሮጠች ነበር እናም ተዘግቶብኝ ነበር " ያለችው ሲፈን ፤ " ግን ምን ታደርጋለህ ስፖርት ነው፣ ሊከሰት ይችላል " ስትል ተናግራለች።',
    likes: 280,
    hashtag: "#Ethiopia #news #Atletics",
  },
  {
    id: 2,
    user: {
     
      username: "jane_smith",
      fullName: "Jane Smith",
      profilePicture: tikvah,
      id:2,
    },
    image: forest,
    text: "Exploring a beautiful forest trail, connecting with nature and finding peace in every step. 🌳🍃🚶‍♀️",
    likes: 85,
    hashtag: "#nature #forest #sunnyday",
  },
  {
    id: 3,
    user: {
      username: "mark_jones",
      fullName: "Mark Jones",
      profilePicture: user10,
      id:2,
    },
    image: burger,
    text: "Delicious food from the weekend BBQ! 🍔🌭",
    likes: 150,
  },
  {
    id: 4,
    user: {
      username: "sarah_smith",
      fullName: "Sarah Smith",
      profilePicture: user13,
      id:1,
    },
    text: "Witnessed a breathtaking sunset over the city skyline! 🌇",
    likes: 220,
  },
  {
    id: 5,
    user: {
      username: "alex_white",
      fullName: "Alex White",
      profilePicture: user8,
      id:2,
    },
    image: mountain,
    text: "Time for a relaxing weekend getaway to the mountains. Ready to recharge! ⛰️🌄",
    likes: 180,
  },
  {
    id: 6,
    user: {
      username: "linda_carter",
      fullName: "Linda Carter",
      profilePicture: user2,
      id:3,
    },
    image: art,
    text: "Visited an art gallery today, saw some amazing works of creativity and imagination! 🎨🖼️",
    likes: 90,
  },
  {
    id: 7,
    user: {
      username: "emma_jones",
      fullName: "Emma Jones",
      profilePicture: user13,
      id:2,
    },

    text: "Celebrating with friends and family at a joyful event! 🎉🥳",
    likes: 210,
  },
  {
    id: 8,
    user: {
      username: "michael_robinson",
      fullName: "Michael Robinson",
      profilePicture: user8,
      id:3,
    },
    image: nature,
    text: "Captured this amazing shot during my latest travel adventure. Nature's beauty is endless! 🌍📸",
    likes: 350,
  },
  {
    id: 9,
    user: {
      username: "emily_brown",
      fullName: "Emily Brown",
      profilePicture: user9,
      id:2,
    },
    text: "Spent the day reading a captivating book by the window. Transported to another world! 📚🪟",
    likes: 120,
  },
  {
    id: 10,
    user: {
      username: "david_wilson",
      fullName: "David Wilson",
      profilePicture: user10,
      id:1,
    },
    image: jog,
    text: "Caught this stunning view during my morning jog. Embracing a healthy lifestyle! 🏃‍♂️🌅",
    likes: 280,
  },
  
];

// Use the 'posts' array as needed in your application
