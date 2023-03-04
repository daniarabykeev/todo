import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TasksContext from "./contexts/TasksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TasksContext>
      <App />
    </TasksContext>
  </BrowserRouter>
);
