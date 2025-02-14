import { useState } from "react";
import { toast } from "react-toastify";
import { Loader, Send } from "lucide-react";

const Subscribe = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isResponse, setIsResponse] = useState(true);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsResponse(false);
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/email/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
          }),
        }
      );
      const result = await response.json();
      if (result.message) toast(result.message);
      else if (result.error) toast.error(result.error);
    } catch (error) {
      console.log(error);
      toast.error("❌ An error occurred. Please try again later.");
    } finally {
      e.target.email.value = "";
      setIsResponse(true);
    }
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Email Subscription */}
      <h2 className="text-xl font-semibold text-center">
        Stay updated with our latest content
      </h2>
      <form
        onSubmit={handleSubmit}
        id="subscribe"
        className={`flex items-center ring ring-gray-300 group transition duration-150 sm:min-w-60 sm:w-96 max-w-96 rounded-sm overflow-hidden relative ${
          isFocus ? "ring-gray-700" : ""
        }`}
      >
        {!isResponse ? (
          <div className="w-full h-full absolute top-0 left-0 bg-white opacity-90 grid place-items-center">
            Please wait . . .{" "}
          </div>
        ) : (
          ""
        )}
        <input
          type="email"
          name="email"
          id="email"
          required={true}
          placeholder="Enter Your Email"
          className="w-full rounded-md outline-none border-none pl-4"
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
        <button
          type="submit"
          className={`py-2 px-4 cursor-pointer text-white bg-black/80 transition duration-150 group-hover:bg-black ${
            isFocus ? "bg-black" : ""
          }`}
        >
          {isResponse ? (
            <Send className={`rotate-30 transition duration-150 scale-90`} />
          ) : (
            <Loader className="animate-spin transition-transform duration-100" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
