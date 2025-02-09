import { Footer, Header, Loader, Searchbar, ThemeToggler } from "./components";
import { HomePage, BlogPage, AuthorPage, ContactPage, AllBlogs } from "./pages";
import { Routes, Route, Navigate } from "react-router";
import { motion } from "motion/react";
import { useContext } from "react";
import { BlogsContext } from "./context/Blogs.jsx";

function App() {
  const { isLoading } = useContext(BlogsContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }} // Adjust duration as needed
      className={`h-screen size-full relative overflow-x-hidden font-cabin ${
        isLoading ? "overflow-hidden" : ""
      }`}
    >
      {/* <ThemeToggler /> */}
      {isLoading ? (
        <div className="absolute z-[10000] bg-white w-full h-full flex flex-col justify-center items-center">
          <div className="md:scale-200 space-y-4">
            <Loader />
            <span>DevDeep loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}

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
            <Route path="/" element={<HomePage />} />
            <Route
              path="/blogs"
              element={<Navigate to="/blogs/search?q=all" replace />}
            />
            <Route path="/blogs/search" element={<AllBlogs />} />
            {/* AllBlogs Page */}
            <Route path="/blogs/:slug" element={<BlogPage />} />
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
