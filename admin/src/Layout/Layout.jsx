import { Main, Navbar, Sidebar } from "../components";

const Layout = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 text-gray-800 p-1">
      {/* Header */}
      <header className="h-[3rem] rounded-md ring ring-black/10 mb-2 flex items-center px-4">
        <Navbar />
      </header>

      <div className="max-h-[calc(100%-3.5rem)] h-full flex gap-2 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-2/12 ring ring-black/10 rounded-md md:min-w-58 md:max-w-58 p-4 flex justify-center md:justify-start">
          <Sidebar />
        </aside>

        {/* Main */}
        <main className="w-full md:w-10/12 rounded-md p-4 overflow-y-auto relative">
          <Main />
        </main>
      </div>
    </div>
  );
};

export default Layout;
