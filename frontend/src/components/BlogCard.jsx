import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const BlogCard = ({ blog, styles = "", index }) => {
  return (
    <article className={`${styles} relative mb-10`}>
      <div
        className={`flex w-full h-full absolute top-0 left-0 z-[-10] ${
          index % 2 === 0 ? "" : "flex-row-reverse"
        }`}
      >
        <div className={"w-full h-full sm:w-4/6 bg-gray-100 col-span-2"}></div>
        <div className={"hidden sm:block h-full w-2/6"}></div>
      </div>

      <div
        className={`z-10 flex flex-col sm:flex-row transition duration-500 h-full items-center w-full ${
          index % 2 === 0 ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <div className="w-full sm:w-1/2 overflow-hidden rounded-sm sm:rounded-none">
          <Link
            to={`/blog/${blog.slug}`}
            className="block sm:p-4 overflow-hidden"
          >
            <img
              src={
                blog.images
                  ? blog.images[0]
                    ? blog.images[0].url
                    : "https://placehold.co/600x400"
                  : "https://placehold.co/600x400"
              }
              loading="lazy"
              alt={blog.title}
              className="object-cover w-full h-full aspect-video sm:aspect-square transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-1/2 p-4 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900">{blog.title}</h1>
          <p className="text-sm text-gray-600 mt-2">Muhammad Faisal</p>
          <p className="text-sm text-gray-500 mt-1">
            {new Date(blog.publishedDate).toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-700 font-light hidden md:block">
            {blog.description}
          </p>

          {/* Read More Button */}
          <Link
            to={`/blogs/${blog.slug}`}
            className="flex justify-end group mt-8"
          >
            <span className="inline-flex gap-2 py-1 px-3 ring ring-black relative text-white group-hover:ring group-hover:text-black">
              <span className="w-full h-full bg-black absolute top-0 left-0 z-[-10] transition-all duration-200 group-hover:bg-transparent"></span>
              <span className="z-10 transition-all duration-200">
                Read more
              </span>
              <ArrowRightIcon className="w-4 h-4 mt-1.5 z-10 transition-all duration-200" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

// PropTypes for type safety
BlogCard.propTypes = {
  blog: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  styles: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default BlogCard;
