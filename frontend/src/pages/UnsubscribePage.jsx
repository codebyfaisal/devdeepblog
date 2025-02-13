import { useState } from "react";
import { toast } from "react-toastify";
import { Logo } from "../components";

const UnsubscribePage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isResponse, setIsResponse] = useState(true);

  const handleUnsubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      // Make a POST request to your backend API
      setIsResponse(false);
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/email/unsubscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (response.status === 200) {
        toast.success(result.message);
        setEmail("");
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      setError("An error occurred. Please try again later.", err);
    } finally {
      setIsResponse(true);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="rounded-lg shadow-sm p-8 max-w-md w-full text-center text-gray-800">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-4">
          {"I'm sorry to see you go!"}
        </h1>
        <p className="mb-4">
          Enter your email address to unsubscribe from my newsletter.
        </p>
        <form onSubmit={handleUnsubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="w-full px-4 py-2 rounded-lg mb-4 border-none outline-none ring ring-black/20 focus:ring-black"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-black/80 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black transition duration-300 w-full cursor-pointer relative"
          >
            {!isResponse ? "Please wait . . ." : "Unsubscribe"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-sm">
          <p>
            If you have any questions, please contact me at
            codebyfaisal@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnsubscribePage;
