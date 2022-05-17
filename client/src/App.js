// components
import { Outlet, useLocation } from "react-router-dom";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";

function App() {
  let location = useLocation();

  const renderByLocation = () => {
    if (location.pathname != "/") {
      return <Outlet />;
    }
    return (
      <div>
        <h1>Notification</h1>

        <p>temporal use when first logged in</p>
        <p>If user wants to use notifications after moving to another page</p>
        <p>the notification will be in settings page</p>
      </div>
    );
  };

  return (
    <div>
      <Topbar />
      {renderByLocation()}
      <Bottombar />
    </div>
  );
}

export default App;
