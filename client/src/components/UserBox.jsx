import dateFormat from "dateformat";
import "../styles/box.scss";

function UserBox({ user }) {
  const { country, city, createdAt, email, username } = user;
  const dateTime = dateFormat(createdAt);

  return (
    <div className="userBox">
      <h1>{username}</h1>
      <div>
        <p>Country : {country}</p>
        <p>City : {city}</p>
        <br />
        <p>Joined at : {dateTime}</p>
        <p>email : {email}</p>
      </div>
    </div>
  );
}

export default UserBox;
