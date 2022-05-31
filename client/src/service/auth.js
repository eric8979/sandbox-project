const axios = require("axios").default;

export const handleLogin = (email, password) => {
  console.log(email, password);
  axios
    .post("http://localhost:8000/api/login", {
      email,
      password,
    })
    .then(function (response) {
      console.log("login request sent");
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
};
