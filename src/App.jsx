import {
  FeatureBlog,
  Footer,
  Header,
  LatestBlogs,
  ThemeToggler,
} from "./components";
import { BlogPage, AuthorPage, ContactPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen size-full relative overflow-x-hidden font-exo2">
      {/* Theme Toggler */}
      <ThemeToggler />

      {/* Main Content Wrapper */}
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="space-y-12 py-8">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <FeatureBlog />
                  <LatestBlogs />
                </>
              }
            />

            {/* Blog Page */}
            <Route path="/blogs/:blogId" element={<BlogPage />} />

            {/* Author Page */}
            <Route path="/author" element={<AuthorPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
