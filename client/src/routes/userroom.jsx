// components
import Bottombar from "../components/Bottombar";
import Topbar from "../components/Topbar";
import UserBox from "../components/UserBox";

function Userroom() {
  return (
    <div>
      <Topbar />
      <h1>User Room</h1>
      <div>
        <UserBox />
        <UserBox />
        <UserBox />
        <UserBox />
      </div>
      <Bottombar />
    </div>
  );
}

export default Userroom;
