import React from "react";
import { AuthorHelmet } from "../components/helmet";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
const profileUrl = import.meta.env.VITE_PROFILE_URL;

const AuthorPage = () => {
  return (
    <section className="flex justify-center items-center my-12">
      <AuthorHelmet />
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-4 sm:p-8 grid md:grid-cols-7 gap-8">
        {/* Image Section */}
        <div className="md:col-span-3 flex justify-center items-center">
          <img
            src={profileUrl}
            loading="lazy"
            alt="Author"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-300"
          />
        </div>

        {/* Text Section */}
        <div className="md:col-span-4">
          <h1 className="text-3xl font-semibold">
            {"Hey, I'm Muhammad Faisal"}!
          </h1>
          <p className="mt-1 mb-4 text-gray-700">Full Stack Web Developer</p>
          <p className="text-lg text-gray-600 text-justify mb-4">
            {
              "Welcome to my digital space! I'm a passionate web developer who loves to share knowledge through writing. On this blog, I dive deep into web development topics, sharing practical insights, tutorials, and my experiences in building modern web applications."
            }
          </p>
          <p className="text-lg text-gray-600 text-justify">
            {
              "When I'm not coding or writing technical articles, you can find me exploring new technologies, contributing to open-source projects, and enjoying cricket. Join me as I document my journey through the ever-evolving world of web development!"
            }
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 flex-wrap">
            <a
              href="#"
              className="flex items-center ring rounded-md overflow-hidden group"
            >
              <Twitter className="p-1 transition-all duration-200 group-hover:scale-110" />
              <span className="bg-black text-white px-2">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center ring rounded-md overflow-hidden group"
            >
              <Github className="p-1 transition-all duration-200 group-hover:scale-110" />
              <span className="bg-black text-white px-2">Github</span>
            </a>
            <a
              href="#"
              className="flex items-center ring rounded-md overflow-hidden group"
            >
              <Linkedin className="p-1 transition-all duration-200 group-hover:scale-110" />
              <span className="bg-black text-white px-2">Linkedin</span>
            </a>
            <a
              href="#"
              className="flex items-center ring rounded-md overflow-hidden group"
            >
              <Instagram className="p-1 transition-all duration-200 group-hover:scale-110" />
              <span className="bg-black text-white px-2">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorPage;
