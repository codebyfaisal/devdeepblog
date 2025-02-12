import { useContext, useEffect } from "react";
import { Footer, Header, Loader, Searchbar } from "./components";
import {
  HomePage,
  BlogPage,
  AuthorPage,
  ContactPage,
  AllBlogs,
  UnsubscribePage,
} from "./pages";
import { Routes, Route, Navigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { BlogsContext } from "./context/Blogs.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  const { isLoading } = useContext(BlogsContext);
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  useEffect(() => {
    if (location.hash === "#subscribe") {
      const subscribeSection = document.getElementById("subscribe");
      if (subscribeSection) {
        setTimeout(() => {
          subscribeSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            window.history.replaceState(null, "", location.pathname);
          }, 500);
        }, 100);
      }
    } else {
      // Scroll to the top of the page on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const isUnsubscribePage = location.pathname === "/email/unsubscribe";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen w-full relative font-cabin ${
        isLoading ? "overflow-hidden" : ""
      }`}
    >
      {isLoading && (
        <div className="absolute z-[10000] bg-white w-full h-full flex flex-col justify-center items-center">
          <div className="md:scale-200 space-y-4">
            <Loader />
            <span>DevDeep loading...</span>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 lg:px-0 space-y-4">
        {!isUnsubscribePage && (
          <>
            <Header />
            <Searchbar />
          </>
        )}

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/blogs"
              element={<Navigate to="/blogs/search?q=all" replace />}
            />
            <Route path="/blogs/search" element={<AllBlogs />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/email/unsubscribe" element={<UnsubscribePage />} />
          </Routes>
        </main>

        {!isUnsubscribePage && <Footer />}
      </div>
      <ToastContainer />
    </motion.div>
  );
}

export default App;
