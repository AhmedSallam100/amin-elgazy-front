import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "شرح درس النحو",
      cover: "https://aminelgazy.mathjewel.com/amin.png",
      artist: "ا.امين الحجازي",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "شرح درس البلاغة",
      cover: "https://aminelgazy.mathjewel.com/amin.png",
      artist: "ا.امين الحجازي",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "شرح طه حسين",
      cover: "https://aminelgazy.mathjewel.com/amin.png",
      artist: "ا.امين الحجازي",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "شرح النصوص",
      cover: "https://aminelgazy.mathjewel.com/amin.png",
      artist: "ا.امين الحجازي",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "شرح الادب",
      cover: "https://aminelgazy.mathjewel.com/amin.png",
      artist: "ا.امين الحجازي",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "شرح المجاز المرسل",
      cover: "https://aminelgazy.mathjewel.com/amin.png",
      artist: "ا.امين الحجازي",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
