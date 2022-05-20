import { Link } from "react-router-dom";
// styles
import "../styles/bar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <Link to="/">LOGO</Link>
      <div>Search Bar</div>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Topbar;
