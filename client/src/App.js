// components
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";
import ChatroomBox from "./components/ChatroomBox";

function App() {
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
        <ChatroomBox />
        <ChatroomBox />
        <ChatroomBox />
        <ChatroomBox />
      </div>
      <Bottombar />
    </div>
  );
}

export default App;
