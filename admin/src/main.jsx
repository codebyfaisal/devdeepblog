import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { BlogsProvider } from "./context/Blogs.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <BlogsProvider>
      <App />
    </BlogsProvider>
  </BrowserRouter>
);
