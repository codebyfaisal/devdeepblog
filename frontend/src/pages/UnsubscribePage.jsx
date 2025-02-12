import { useState } from "react";
import { toast } from "react-toastify";
import { Logo } from "../components";
import { useNavigate } from "react-router";

const UnsubscribePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleUnsubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      // Make a POST request to your backend API
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
        setIsUnsubscribed(true);
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      setError("An error occurred. Please try again later.", err);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center font-cabin">
      {/* Logo */}
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="rounded-lg shadow-sm p-8 max-w-md w-full text-center text-gray-800">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-4">
          {"I'm sorry to see you go!"}
        </h1>

        {/* Unsubscribe Form */}
        {!isUnsubscribed ? (
          <>
            <p className="mb-4">
              Enter your email address to unsubscribe from my newsletter.
            </p>
            <form onSubmit={handleUnsubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg mb-4 border-none outline-none ring ring-black/20 focus:ring-black"
                required
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="bg-black/80 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black transition duration-300 w-full cursor-pointer"
              >
                Unsubscribe
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Success Message */}
            <p className="mb-4">
              {"You've successfully unsubscribed "}
              <span className="font-bold text-black">{email}</span> from my
              newsletter.
            </p>
            <p className="mb-6">
              I hope you enjoyed the content I shared. You can always
              resubscribe if you change your mind.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-black/80 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black transition duration-300"
                onClick={() => navigate("/#subscribe")}
              >
                Resubscribe
              </button>
              <a
                href="/"
                className="bg-white border-2 border-black text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
              >
                Visit Blog
              </a>
            </div>
          </>
        )}

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
