import { Link } from "react-router-dom";
// styles
import "../styles/bar.scss";
import { FcHome } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";

function Topbar() {
  return (
    <div className="topbar">
      <Link to="/" className="logo">
        <FcHome />
      </Link>
      <div className="title">🤖 Weather Chatbot</div>
      <Link to="/settings" className="settings">
        <AiFillSetting />
      </Link>
    </div>
  );
}

export default Topbar;
