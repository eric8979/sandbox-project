import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import authService from "../service/auth";
// styles
import "../styles/layout.scss";

function Signup() {
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(0);
  const [userinfo, setUserInfo] = useState({
    username: "",
    country: "",
    city: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (sessionStorage.key("user-token")) {
      navigate("/", { replace: true });
    }
  }, [signupSuccess, setSignupSuccess, navigate]);

  const onChange = (e) => {
    setUserInfo((orgState) => ({
      ...orgState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = await authService.handleSignup(userinfo);
    setSignupSuccess(answer);
  };

  return (
    <div className="mainBox">
      <h1>Welcome to WeatherAPP/twitter/Messanger!</h1>
      <h2>Stay connected to weather*stories*friends</h2>

      <button>Create account with Google</button>
      <br />
      <button>Create account with GitHub</button>

      <br />
      <br />

      <p>
        <b>Country Code</b> and <b>City Name</b> is required for Weather
        service!
      </p>

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
            value={userinfo.country}
            type="text"
            id="country"
          />
        </label>
        <label htmlFor="city">
          <input
            placeholder="City Name"
            onChange={(e) => onChange(e)}
            value={userinfo.city}
            type="text"
            id="city"
          />
        </label>
        <label htmlFor="email">
          <input
            placeholder="email"
            onChange={(e) => onChange(e)}
            value={userinfo.email}
            type="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          <input
            placeholder="password"
            onChange={(e) => onChange(e)}
            value={userinfo.password}
            type="password"
            id="password"
          />
        </label>

        <label className="submitBtn" htmlFor="submit">
          <input type="submit" id="submit" />
        </label>
      </form>

      <br />

      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
