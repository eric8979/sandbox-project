const axios = require("axios").default;

const getAllPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/posts");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const addPost = async (text) => {
  const token = JSON.parse(sessionStorage.getItem("user-token")).token;
  try {
    const response = await axios.post("http://localhost:8080/api/posts/add", {
      text,
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const postsService = {
  getAllPosts,
  addPost,
};

export default postsService;
