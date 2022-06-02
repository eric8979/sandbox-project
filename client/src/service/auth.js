const axios = require("axios").default;

const handleSignup = async ({ username, country, email, password }) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users", {
      username,
      country,
      email,
      password,
    });
    if (response.data) {
      console.log("signup request sent...");
      localStorage.setItem("user-token", JSON.stringify(response.data));
      return "success";
    }
  } catch (err) {
    console.log(err);
  }
};

const handleLogin = async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users/login", {
      email,
      password,
    });
    if (response.data) {
      console.log("signin request sent...");
      localStorage.setItem("user-token", JSON.stringify(response.data));
      return "success";
    }
  } catch (err) {
    console.log(err);
  }
};

const authService = {
  handleSignup,
  handleLogin,
};

export default authService;
