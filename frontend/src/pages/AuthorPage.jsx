import React from "react";
import { AuthorHelmet } from "../components/helmet";
const profileUrl = import.meta.env.VITE_PROFILE_URL;

const AuthorPage = () => {
  return (
    <section className="flex justify-center items-center">
      <AuthorHelmet />
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-7 gap-8">
        {/* Image Section */}
        <div className="md:col-span-3 flex justify-center items-center">
          <img
            src={profileUrl}
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
          <div className="flex space-x-6 mt-6">
            <a href="#" className="hover: py-2 px-4 rounded-full text-lg">
              Twitter
            </a>
            <a href="#" className="hover: py-2 px-4 rounded-full text-lg">
              Instagram
            </a>
            <a href="#" className="hover: py-2 px-4 rounded-full text-lg">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorPage;
