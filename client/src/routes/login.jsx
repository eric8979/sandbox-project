import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// lib
import authService from "../service/auth";
// styles
import "../styles/layout.scss";

function Login() {
  const [loginSuccess, setLoginSuccess] = useState(0);
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (sessionStorage.key("user-token")) {
      navigate("/", { replace: true });
    }
  }, [loginSuccess, setLoginSuccess, navigate]);

  const onChange = (e) => {
    setUserinfo((orgState) => ({
      ...orgState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userinfo.email || !userinfo.password) {
      alert("Please fill all boxes");
      return;
    }
    const answer = await authService.handleLogin(userinfo);
    setLoginSuccess(answer);
  };

  return (
    <div className="container">
      <h1>Welcome back!</h1>
      <h2>Stay connected to weather*stories*friends</h2>

      <button>Login with Google</button>
      <button>Login with GitHub</button>

      <br />

      <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
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
        <label htmlFor="submit">
          <input type="submit" id="submit" />
        </label>
      </form>

      <br />

      <p>
        Don't have an account? <Link to="/signup">Create account</Link>
      </p>
    </div>
  );
}

export default Login;
