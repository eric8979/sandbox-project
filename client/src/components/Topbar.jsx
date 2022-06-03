import { Link } from "react-router-dom";
// styles
import "../styles/bar.scss";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiFillSetting } from "react-icons/ai";

function Topbar() {
  return (
    <div className="topbar">
      <Link to="/" className="logo">
        <TiWeatherPartlySunny />
      </Link>
      <Link to="/settings" className="settings">
        <AiFillSetting />
      </Link>
    </div>
  );
}

export default Topbar;
