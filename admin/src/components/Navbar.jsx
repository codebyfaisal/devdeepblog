import { useContext } from "react";
import { Link } from "react-router";
import { StoreContext } from "../context/Store";

const Navbar = () => {
  const { setAuthenticate } = useContext(StoreContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticate(false);
  };
  return (
    <nav className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold">
        <Link to={"/"}>Admin Panel</Link>
      </h1>

      <button
        className="bg-black py-1 px-4 ring ring-black text-white rounded-md hover:text-black hover:bg-transparent cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
