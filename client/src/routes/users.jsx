import "../styles/box.scss";
import { useState, useEffect } from "react";
// components
import Bottombar from "../components/Bottombar";
import Topbar from "../components/Topbar";
import UserBox from "../components/UserBox";
import authService from "../service/auth";

const Userroom = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usersData = await authService.handleGetAllUser();
      setUsers(usersData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Topbar />
      <h1>User Room</h1>

      <div className="usersBox">
        {!users
          ? ""
          : users.map((user, index) => {
              return <UserBox key={index} user={user} />;
            })}
      </div>

      <Bottombar />
    </div>
  );
};

export default Userroom;
