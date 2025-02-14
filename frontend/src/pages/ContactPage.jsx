import { useState } from "react";
import { Send } from "lucide-react";
import { ContactHelmet } from "../components/helmet";
import { toast } from "react-toastify";

const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isResponse, setIsResponse] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsResponse(false);
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      const result = await response.json();

      if (result.message) {
        toast.success(result.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
      else if (result.error) toast.error(result.error);

      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsResponse(true);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center sm:px-4 my-12">
      <ContactHelmet />
      {/* Main Content */}
      <div className="max-w-xl lg:max-w-2xl w-full space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 opacity-70">
            {
              "We'd love to hear from you! Fill out the form below or reach out via email."
            }
          </p>
        </div>

        {/* Form Section */}
        <form
          className={`grid sm:grid-cols-2 gap-4 transition duration-150`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 focus:ring-gray-500 sm:col-span-1"
            onChange={handleChange}
            required={true}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 focus:ring-gray-500 sm:col-span-1"
            onChange={handleChange}
            required={true}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 focus:ring-gray-500 sm:col-span-2"
            onChange={handleChange}
            required={true}
          />
          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Write your message"
            value={formData.message}
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 focus:ring-gray-500 sm:col-span-2"
            onChange={handleChange}
            required={true}
          ></textarea>
          <button
            type="submit"
            className={`py-2 px-4 cursor-pointer rounded-md text-white bg-black/80 transition duration-150 hover:bg-black sm:col-span-2 flex gap-2 justify-center font-medium`}
          >
            {" "}
            Send
            <Send className={`rotate-30 transition duration-150 scale-90`} />
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="text-center space-y-4">
          <p className="text-gray-800">
            Alternatively, you can email us directly at{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 underline"
            >
              codebyfaisal@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
