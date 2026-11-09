// src/content.js
const content = {
  music: "/path-to-your-music.mp3", 
  
  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `I love you more than words could ever explain, and I hope you know how much you truly mean to me. You are my back, my support, my safe place, my husband, my lover, my best friend, and even my brother. You are not just my boyfriend,you are my person, the one I can lean on no matter what life brings. my life with you is the best life I could ever ask for You make everything feel more beautiful, more meaningful, and more worth it. No one in this world could ever take your place, and no matter who comes into my life, nobody will ever have the place you have in my heart.

 Sometimes I look at myself and realize that I have done things I never imagined I could do for anyone. I never knew I was capable of loving someone this deeply caring this much or having this much patience and strength. I never knew I could give so much of myself to another person but then you came into my life, and I realized that it was all because of you and because of what I feel for you. you brought out a side of me that I never knew existed.I want you to know that I am proud of loving you, proud of standing by you, and proud of everything we have been through together. You are not someone I simply love; you are someone I choose, someone I believe in, and someone I want beside me through every version of life. I want to be there for your best days and your worst days, to celebrate your happiness, carry your worries, and remind you that you never have to face anything alone.I don’t need a perfect life, and I don’t need everything to be easy. I just want a life where you are in it. I want all the ordinary little moments, the difficult days, the laughter, the arguments, the making up, the growing together, and all the memories we still haven’t made. You have a place in my heart that belongs to you and only you, and I swear I could spend a lifetime trying to explain how much I love you and still never find the right words. You are my home, my happiness, my strength, and one of the most beautiful things that has ever happened to me. I love you endlessly and I hope I make you feel even half of that love inside me for you ❤️`,

    signoff: "your love",
    signature: "yours always ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg", label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
      { src: "/images/placeholder-7.jpg", label: "" },
      { src: "/images/placeholder-8.jpg", label: "" },
      { src: "/images/placeholder-9.jpg", label: "" },
      { src: "/images/placeholder-10.jpg", label: "" },
      { src: "/images/placeholder-11.jpg", label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4", 
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;