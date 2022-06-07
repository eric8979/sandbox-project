import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authService from "../service/auth";
// components
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
// styles
import "../styles/layout.scss";

function Settings() {
  const token = sessionStorage.getItem("user-token");
  const navigate = useNavigate();
  const [logoutSuccess, setLogoutSuccess] = useState(0);
  const [userinfo, setUserinfo] = useState({
    username: "",
    country: "",
    city: "",
    email: "",
  });

  useEffect(() => {
    if (logoutSuccess === "logout") {
      sessionStorage.clear();
      navigate("/login", { replace: true });
    }
  }, [logoutSuccess, setLogoutSuccess, navigate]);

  const onChange = (e) => {
    setUserinfo((orgState) => ({
      ...orgState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userinfo.country.length > 2) {
      alert("Please use alpha-2 country code");
      return;
    }
    const response = await authService.handleUserEdit(userinfo);
    if (response === "success") {
      alert("User info successfully changed");
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Topbar />
      <div className="mainBox">
        <h3>Edit Your information</h3>
        <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">
            <input
              placeholder="username"
              onChange={(e) => onChange(e)}
              value={userinfo.username}
              type="text"
              id="username"
            />
          </label>
          <label htmlFor="country">
            <input
              placeholder="Please use Alpha-2 Country Code"
              onChange={(e) => onChange(e)}
              value={userinfo.country.toUpperCase()}
              type="text"
              id="country"
            />
          </label>
          <label htmlFor="city">
            <input
              placeholder="City Name (lower case)"
              onChange={(e) => onChange(e)}
              value={userinfo.city.toLowerCase()}
              type="text"
              id="city"
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Change email"
              onChange={(e) => onChange(e)}
              value={userinfo.email}
              type="email"
              id="email"
            />
          </label>
          <label className="submitBtn" htmlFor="submit">
            <input type="submit" id="submit" />
          </label>
        </form>

        <br />

        <div>
          Want to logout?{" "}
          <button
            className="logoutBtn"
            onClick={() => setLogoutSuccess("logout")}
          >
            Logout
          </button>
        </div>
        <Bottombar />
      </div>
    </div>
  );
}

export default Settings;
