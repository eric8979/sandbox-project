import { Link } from "react-router-dom";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup form submit called");
  };

  return (
    <div className="container">
      <h1>Welcome to Weather-Chatbot/Messanger!</h1>
      <h2>Stay connected with weather/friends all the time</h2>

      <button>Create account with Google</button>
      <button>Create account with GitHub</button>

      <br />

      <form className="authForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">
          username: <input type="text" id="username" />
        </label>
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
        Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
