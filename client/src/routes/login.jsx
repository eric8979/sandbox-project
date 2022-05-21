// styles
import { Link } from "react-router-dom";
import "../styles/layout.scss";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form submit called");
  };

  return (
    <div className="container">
      <h1>Welcome back to Weather-Chatbot/Messanger!</h1>
      <h2>Stay connected with weather/friends all the time</h2>

      <button>Login with Google</button>
      <button>Login with GitHub</button>

      <br />

      <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          email: <input type="text" id="email" />
        </label>
        <label htmlFor="password">
          password: <input type="text" id="password" />
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
