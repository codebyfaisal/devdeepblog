import {
  FeatureBlog,
  Footer,
  Header,
  LatestBlogs,
  Searchbar,
  ThemeToggler,
} from "./components";
import { BlogPage, AuthorPage, ContactPage, AllBlogs } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { motion } from "motion/react";
import { AuthorContext } from "./context/Author.jsx";
import { useContext } from "react";

function App() {
  const author = useContext(AuthorContext);
  console.log(author);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }} // Adjust duration as needed
      className="h-screen size-full relative overflow-x-hidden font-exo2"
    >
      <ThemeToggler />
      {/* Theme Toggler */}
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        {" "}
        {/* Main Content Wrapper */}
        <Header /> {/* Header */}
        <Searchbar /> {/* Searchbar */}
        <main className="space-y-12 py-8">
          {/* Main Content */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <FeatureBlog />
                  <LatestBlogs />
                </>
              }
            />
            <Route
              path="/blogs"
              element={<Navigate to="/blogs/search?q=all" replace />}
            />
            <Route path="/blogs/search" element={<AllBlogs />} />
            {/* AllBlogs Page */}
            <Route path="/blogs/:blogId" element={<BlogPage />} />
            {/* Blog Page */}
            <Route path="/author" element={<AuthorPage />} />
            {/* Author Page */}
            <Route path="/contact" element={<ContactPage />} />
            {/* Contact Page */}
          </Routes>
        </main>
        <Footer /> {/* Footer */}
      </div>
    </motion.div>
  );
}

export default App;
