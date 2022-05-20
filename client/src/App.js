import { Outlet, useLocation } from "react-router-dom";
// components
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
        <h1>chatroom</h1>
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
