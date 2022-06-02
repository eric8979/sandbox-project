import axios from "axios";
import { useState, useEffect } from "react";
// components
import Bottombar from "../components/Bottombar";
import Topbar from "../components/Topbar";
import UserBox from "../components/UserBox";

const Userroom = () => {
  const [users, setUsers] = useState(null);

  if (!users) return null;

  return (
    <div>
      <Topbar />
      <h1>User Room</h1>

      <div>
        {Array.isArray(users)
          ? users.map((user, i) => {
              return <UserBox key={i} user={user} />;
            })
          : ""}
      </div>

      <Bottombar />
    </div>
  );
};

export default Userroom;
