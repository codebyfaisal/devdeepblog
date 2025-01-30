import {
  FeatureBlog,
  Footer,
  Header,
  LatestBlogs,
  ThemeToggler,
} from "./components";
function App() {
  return (
    <div className="h-screen size-full relative overflow-x-hidden font-exo2">
      <ThemeToggler />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <Header />
        <main className="space-y-12">
          <FeatureBlog />
          <LatestBlogs />
          <Footer />
        </main>
      </div>
    </div>
  );
}
export default App;
