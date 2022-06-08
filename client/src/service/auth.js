const axios = require("axios").default;

const handleSignup = async ({ username, country, city, email, password }) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users", {
      username,
      country,
      city,
      email,
      password,
    });
    if (response.data) {
      sessionStorage.setItem("user-token", JSON.stringify(response.data));
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
      sessionStorage.setItem("user-token", JSON.stringify(response.data));
      return "success";
    }
  } catch (err) {
    console.log(err);
  }
};

const handleUserEdit = async ({ username, country, city, email }) => {
  const token = JSON.parse(sessionStorage.getItem("user-token")).token;
  try {
    const response = await axios.put(
      "http://localhost:8080/api/users/edit",
      {
        username,
        country: country.toUpperCase(),
        city: city.toLowerCase(),
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return "success";
    } else {
      return "fail";
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetUser = async (userId) => {
  try {
    const response = await axios.post("http://localhost:8080/api/users/self", {
      userId,
    });
    return response.data.username;
  } catch (err) {
    console.log(err);
  }
};

const handleGetAllUser = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/users/all");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const authService = {
  handleSignup,
  handleLogin,
  handleUserEdit,
  handleGetUser,
  handleGetAllUser,
};

export default authService;
