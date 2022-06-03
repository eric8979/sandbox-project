import { Link } from "react-router-dom";

function Notfound() {
  return (
    <>
      <h1>404: Page Not Found</h1>
      <h2>
        <Link to="/">back to home</Link>
      </h2>
    </>
  );
}

export default Notfound;
