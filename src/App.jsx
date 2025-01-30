import {
  FeatureBlog,
  Footer,
  Header,
  LatestBlogs,
  ThemeToggler,
} from "./components";
import { BlogPage, AuthorPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="h-screen size-full relative overflow-x-hidden font-exo2">
      <ThemeToggler />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <Header />
        <main className="space-y-12">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeatureBlog />
                  <LatestBlogs />
                </>
              }
            />

            <Route path="/blogs/:blogId" element={<BlogPage />} />
            <Route path="/author" element={<AuthorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
