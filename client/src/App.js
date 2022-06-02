// Weather broadcasting page
import axios from "axios";
import { useState, useEffect } from "react";
// components
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";
import ChatroomBox from "./components/ChatroomBox";

function App() {
  const [chats, setChats] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <Topbar />
      <h1>Chatroom page</h1>
      <div></div>

      <Bottombar />
    </div>
  );
}

export default App;

// {Array.isArray(chats) ? (
//   chats.map((chat, i) => {
//     return <ChatroomBox key={i} chat={chat} />;
//   })
// ) : (
//   <h2>No chatting room!</h2>
// )}
