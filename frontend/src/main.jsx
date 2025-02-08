import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BlogsProvider } from "./context/Blogs.jsx";
import { WebsiteProvider } from "./context/Website.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WebsiteProvider>
      <BlogsProvider>
        <App />
      </BlogsProvider>
    </WebsiteProvider>
  </BrowserRouter>
);
