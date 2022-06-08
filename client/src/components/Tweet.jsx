import "../styles/layout.scss";

function Tweet({ writer, createdAt, text }) {
  return (
    <div className="tweetBox">
      <p>{text}</p>
      <small>
        <b>{writer}</b> {createdAt}
      </small>
    </div>
  );
}

export default Tweet;
