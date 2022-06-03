import { NavLink } from "react-router-dom";
// sytles
import "../styles/bar.scss";
import { FaKiwiBird } from "react-icons/fa";
import { GiNestBirds } from "react-icons/gi";
import { SiThunderbird } from "react-icons/si";

function Bottombar() {
  return (
    <div className="bottombar">
      <NavLink to="/tell">
        <FaKiwiBird />
      </NavLink>
      <NavLink to="/users">
        <GiNestBirds />
      </NavLink>
      <NavLink to="/message">
        <SiThunderbird />
      </NavLink>
    </div>
  );
}

// TODO: message route should be used with another server port

export default Bottombar;
