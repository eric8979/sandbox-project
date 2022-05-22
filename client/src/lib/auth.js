const axios = require("axios").default;

export const handleLogin = (email, pwd) => {
  console.log(email, pwd);
  axios
    .post("http://localhost:8000/api/login", {
      email,
      pwd,
    })
    .then(function (response) {
      console.log("login request sent");
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
};
