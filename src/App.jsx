import {
  FeatureBlog,
  Footer,
  Header,
  LatestBlogs,
  Searchbar,
  ThemeToggler,
} from "./components";
import { BlogPage, AuthorPage, ContactPage, AllBlogs } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen size-full relative overflow-x-hidden font-exo2">
      <ThemeToggler />{/* Theme Toggler */}
      <div className="max-w-5xl mx-auto px-4 lg:px-0"> {/* Main Content Wrapper */}
        <Header /> {/* Header */}
        <Searchbar /> {/* Searchbar */}
        <main className="space-y-12 py-8">{/* Main Content */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <> <FeatureBlog />
                  <LatestBlogs />
                </>
              }
            />            
            <Route path="/blogs/search" element={<AllBlogs />} />{/* AllBlogs Page */}
            <Route path="/blogs/:blogId" element={<BlogPage />} />{/* Blog Page */}            
            <Route path="/author" element={<AuthorPage />} />{/* Author Page */}            
            <Route path="/contact" element={<ContactPage />} />{/* Contact Page */}
          </Routes>
        </main> 
        <Footer /> {/* Footer */}
      </div>
    </div>
  );
}

export default App;
