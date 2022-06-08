import { useEffect, useState } from "react";
import postsService from "../service/posts";
// components
import Tweet from "../components/Tweet";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

function Tweets() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const onRefresh = async () => {
    const posts = await postsService.getAllPosts();
    setPosts(posts);
  };

  const onTextInput = (e) => {
    setText(e.target.value);
  };
  const handlePost = (e) => {
    e.preventDefault();
    postsService.addPost(text);
    setText("");
  };

  useEffect(() => {
    async function fetchData() {
      const posts = await postsService.getAllPosts();
      setPosts(posts);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Topbar />

      <div className="mainBox">
        <h2>
          Social Network <button onClick={() => onRefresh()}>refresh</button>
        </h2>

        <br />

        <form className="" onSubmit={(e) => handlePost(e)}>
          <label htmlFor="text">
            <input
              placeholder="How's the weather?"
              onChange={(e) => onTextInput(e)}
              value={text}
              type="text"
              id="text"
            />
          </label>
          <label className="submitBtn" htmlFor="submit">
            <input value="Post" type="submit" id="submit" />
          </label>
        </form>

        <br />

        {!posts
          ? ""
          : posts.map((post, index) => (
              <Tweet
                key={index}
                text={post.text}
                writer={post.user}
                createdAt={post.createdAt}
              />
            ))}
      </div>

      <Bottombar />
    </div>
  );
}

export default Tweets;
