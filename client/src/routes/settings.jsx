import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../service/auth";
// components
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

function Settings() {
  const navigate = useNavigate();
  const [editSuccess, setEditSuccess] = useState(0);
  const [userinfo, setUserinfo] = useState({
    username: "",
    country: "",
    city: "",
    email: "",
  });

  // useEffect(() => {
  //     navigate("/login", { replace: true });
  // }, [ navigate]);

  const logout = () => {
    return;
  };

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
    setEditSuccess(response);
  };

  return (
    <div>
      <Topbar />
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
        <label htmlFor="submit">
          <input type="submit" id="submit" />
        </label>
      </form>

      <br />

      <div>
        Want to logout? <button onClick={() => logout()}>Logout</button>
      </div>
      <Bottombar />
    </div>
  );
}

export default Settings;
