import "../styles/box.scss";

function UserBox({ user }) {
  return (
    <div className="userBox">
      <h1>{user.username}</h1>
      <p>user info</p>
      <div>chat!(chatting functionality)</div>
    </div>
  );
}

export default UserBox;
