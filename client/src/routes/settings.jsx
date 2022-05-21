// components
import Bottombar from "../components/Bottombar";
import Topbar from "../components/Topbar";

function Settings() {
  return (
    <>
      <Topbar />
      <div>
        <h1>Settings page</h1>
        <div>username</div>
        <div>email</div>
        <div>birthday</div>
        <br />
        <button>notification</button>
      </div>
      <Bottombar />
    </>
  );
}

export default Settings;
