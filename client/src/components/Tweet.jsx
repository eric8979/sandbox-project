import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import authService from "../service/auth";
import "../styles/layout.scss";

function Tweet({ writer, createdAt, text }) {
  const [username, setUsername] = useState("");
  const dateTime = dateFormat(createdAt);

  useEffect(() => {
    async function fetchUsername() {
      const user = await authService.handleGetUser(writer);
      setUsername(user);
    }
    fetchUsername();
  }, [username, setUsername]);

  return (
    <div className="tweetBox">
      <p>{text}</p>
      <small>
        <b>{username}</b>
      </small>
      <small>{dateTime}</small>
    </div>
  );
}

export default Tweet;
