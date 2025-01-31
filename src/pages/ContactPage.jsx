import { useState } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div
      className="flex flex-col items-center justify-center py-12 sm:px-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Main Content */}
      <div className="max-w-xl lg:max-w-2xl w-full space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 text-lg text-gray-700">
            We'd love to hear from you! Fill out the form below or reach out via
            email.
          </p>
        </div>

        {/* Form Section */}
        <form
          action="POST"
          className={`grid sm:grid-cols-2 gap-4 transition duration-150`}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 hover:ring-gray-500 sm:col-span-1"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 hover:ring-gray-500 sm:col-span-1"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="subject"
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 hover:ring-gray-500 sm:col-span-2"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Write your message"
            className="rounded-md outline-none border-none ring ring-gray-200 py-2 px-4 hover:ring-gray-500 sm:col-span-2"
          ></textarea>
          <button
            type="submit"
            className={`py-2 px-4 cursor-pointer rounded-md text-white bg-black/80 transition duration-150 hover:bg-black sm:col-span-2 flex gap-2 justify-center font-medium`}
          > Send
            <PaperPlaneIcon
              className={`-rotate-20 transition duration-150`}
              width={18}
              height={18}
            />
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
              contact@example.com
            </a>
            .
          </p>
          <p className="text-gray-600">
            Follow us on social media for updates:
            <a
              href="https://www.github.com/codebyfaisal"
              className="ml-2 text-blue-600 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
