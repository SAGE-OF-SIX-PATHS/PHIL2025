import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursorSetup from "./components/AnimatedCursorSetup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div className="hidden lg:block">
      <AnimatedCursorSetup />
    </div>
  </React.StrictMode>
);
