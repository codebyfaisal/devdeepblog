import React from "react";
import { Helmet } from "react-helmet";
import { dummyBlog } from "../assets";
import { Link } from "react-router-dom";

const FeatureBlog = () => {
  const { slug, title, description, date, author, image } = dummyBlog;
  return (
    <article className="feature-Blog w-full">
      {/* Dynamic meta tags for SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Feature Blog Container */}
      <div className="relative overflow-hidden rounded-md max-h-[70vh] shadow-md group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center min-h-40 group-hover:scale-[1.025] transition-transform duration-300"
        />

        <div className="sm:absolute sm:inset-0 flex flex-col justify-end p-3 sm:p-6 sm:bg-gradient-to-t from-black via-transparent to-transparent sm:text-white">
          {/* Blog Title */}
          <Link to={`/blog/${slug}`}>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-2">
              {title}
            </h1>
          </Link>

          {/* Blog Meta */}
          <div className="text-sm mb-4">
            <time dateTime="2025-01-30" className="mr-2">
              {date}
            </time>
            <span className="text-gray-300">|</span>
            <span className="ml-2">
              By{" "}
              <Link to="/author-name" className="text-blue-400 hover:underline">
                {author}
              </Link>
            </span>
          </div>

          {/* Blog Description */}
          <p className="text-md sm:text-lg">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default FeatureBlog;
