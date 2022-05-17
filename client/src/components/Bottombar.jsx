import { NavLink } from "react-router-dom";
// sytles
import "../styles/bar.scss";

function Bottombar() {
  return (
    <div className="bottombar">
      <nav>
        <NavLink to="/chatroom">Chatroom</NavLink> |{" "}
        <NavLink to="/userroom">Userroom</NavLink>
      </nav>
    </div>
  );
}

export default Bottombar;
