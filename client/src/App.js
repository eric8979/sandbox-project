import axios from "axios";
import { useState, useEffect } from "react";
// components
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";
import ChatroomBox from "./components/ChatroomBox";

function App() {
  const [chats, setChats] = useState(null);

  useEffect(() => {
    axios.get("/api/chat").then((response) => {
      setChats(response.data);
    });
  }, []);

  return (
    <div>
      <Topbar />
      <h1>Chatroom page</h1>
      <div>
        <div>Weather Chatbot</div>
        <div>Weather Chatbot</div>
        <div>Weather Chatbot</div>
      </div>

      <br />

      <div>
        {Array.isArray(chats) ? (
          chats.map((chat, i) => {
            return <ChatroomBox key={i} chat={chat} />;
          })
        ) : (
          <h2>No chatting room!</h2>
        )}
      </div>
      <Bottombar />
    </div>
  );
}

export default App;
