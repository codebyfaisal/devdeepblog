import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { StoreContext } from "../context/Store.jsx";

const Login = () => {
  const { setAuthenticate } = useContext(StoreContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...credentials }),
        }
      );

      const result = await response.json();

      if (result.message) {
        toast.success(result.message);
        localStorage.setItem("token", result.token);
        setAuthenticate(result.token);
      }
      if (result.error) toast.error(result.error);

      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full shadow-md rounded-md p-8"
      >
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <div className="space-y-4 my-8">
          <input
            type="text"
            name="email"
            required={true}
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-none outline-none rounded-md ring ring-black/30 focus:ring-black"
          />
          <input
            type="password"
            name="password"
            required={true}
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border-none outline-none rounded-md ring ring-black/30 focus:ring-black"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 border-none outline-none rounded-md ring-1 ring-inset ring-black/30 bg-black text-white cursor-pointer hover:ring-black hover:bg-transparent hover:text-black font-bold transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
