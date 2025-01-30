import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const PostCard = ({ post, styles, index }) => {
  return (
    <article className={`${styles} h-[50vh] relative mb-10`}>
      <div
        className={`flex w-full h-full absolute top-0 left-0 z-[-10] ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <div className={"h-full w-4/6 bg-gray-100 col-span-2"}></div>
        <div className={"h-full w-2/6"}></div>
      </div>

      <div
        className={`z-10 flex transition duration-500 h-full items-center w-full
          ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
      >
        <div className={"w-1/6 h-full"}></div>

        <Link
          to={`/blog/1 ${post.slug}`}
          className={
            "w-2/6 h-full aspect-square py-4 flex items-center justify-center"
          }
        >
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full aspect-square rounded-md"
          />
        </Link>

        <div className={"w-3/6 px-8"}>
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <p className="text-sm opacity-85">{post.author}</p>
          <p className="text-sm opacity-65 mt-1">{post.date}</p>
          <p className="mt-2 font-light">{post.description}</p>

          <Link
            to={`/blogs/${post.slug}`}
            className="group mt-4 inline-block relative overflow-hidden py-1 px-3 group ring hover:ring-black"
          >
            <span className="flex items-center gap-1 text-white z-10 group-hover:text-black">
              read more
              <ArrowRightIcon className="mt-1" />
            </span>
            <span className="bg-black absolute top-0 left-0 w-full h-full z-[-10] transition-all duration-300 group-hover:left-full"></span>
          </Link>
        </div>
      </div>
    </article>
  );
};

// PropTypes for type safety
PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  styles: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default PostCard;
