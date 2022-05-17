import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to weather-chatbot</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">login</Link> | <Link to="/signup">signup</Link>
        <br />
        <Link to="/chatroom">Chatroom</Link> |{" "}
        <Link to="/userroom">Userroom</Link>
        <br />
        <Link to="/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
