import { FeatureBlog, Footer, Header, ThemeToggler } from "./components";
function App() {
  return (
    <div className="h-screen size-full relative overflow-x-hidden">
      <ThemeToggler />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <Header />
        <main>
          <FeatureBlog />
          <Footer />
        </main>
      </div>
    </div>
  );
}
export default App;
