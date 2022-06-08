// components
import Tweet from "../components/Tweet";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

function Tweets() {
  const posts = [
    {
      user: "tom",
      text: "test post",
      createdAt: "2022-02-11",
    },
    {
      user: "jasmine",
      text: "test post #2",
      createdAt: "2022-03-03",
    },
  ];

  return (
    <div>
      <Topbar />

      <div className="mainBox">
        <h2>Social Network</h2>
        <br />
        {posts.map((data, index) => (
          <Tweet
            key={index}
            writer={data.user}
            text={data.text}
            createdAt={data.createdAt}
          />
        ))}
      </div>

      <Bottombar />
    </div>
  );
}

export default Tweets;
