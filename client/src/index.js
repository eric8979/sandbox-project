import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// routes
import Signup from "./routes/signup";
import Login from "./routes/login";
import Users from "./routes/users";
import Settings from "./routes/settings";
import Tell from "./routes/tell";
import NotFound from "./routes/notfound";
// styles
import "./styles/layout.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/tell" element={<Tell />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// path="/" is for Weather(main) page

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
