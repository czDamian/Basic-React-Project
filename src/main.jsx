import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/tailwind.min.css";
import "./Css/default.css";
import AllRoutes from "./Routes/AllRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AllRoutes />
  </React.StrictMode>
);
