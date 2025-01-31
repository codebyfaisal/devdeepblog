import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const pagination = (blogId) => {
  return (
    <div className="flex items-center font-bold mb-4">
      <Link to={"/"} className="hover:underline">
        Home
      </Link>
      <span className="relative w-4 h-4 mx-2">
        <ChevronRightIcon className="mt-0.5 scale-110 absolute top-0 -left-0.5" />
        <ChevronRightIcon className="mt-0.5 scale-110 absolute top-0 left-0" />
      </span>
      <Link to={"/blogs"} className="hover:underline">
        Blogs
      </Link>
      <span className="relative w-4 h-4 mx-2">
        <ChevronRightIcon className="mt-0.5 scale-110 absolute top-0 -left-0.5" />
        <ChevronRightIcon className="mt-0.5 scale-110 absolute top-0 left-0" />
      </span>
      <span className="text-gray-700 cursor-default">{blogId}</span>
    </div>
  );
};

const BlogPage = () => {
  const { blogId } = useParams();

  return (
    <>
      <Helmet>
        <title>{blogId}</title>
        <meta name="description" content={`Read about ${blogId}`} />
        <meta property="og:title" content={blogId} />
        <meta
          property="og:description"
          content={`An insightful blog on ${blogId}`}
        />
        <meta property="og:image" content="/default-image.jpg" />
        <meta property="og:type" content="article" />
      </Helmet>

      {pagination(blogId)}
      <section className="flex gap-6">
        <article className="w-3/4 p-8 bg-gray-50">
          <p className="opacity-80 text-sm mb-1">Published by: John Doe</p>
          <p className="opacity-80 text-sm mb-4">
            Published at: January 23, 2025
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Transform your winter blues into winter creativity
          </h1>
          <div className="prose prose-lg text-gray-800">
            <p>
              {"Winter can often feel like a time of stagnation, but it doesn't have to be. With the right mindset and creative approaches, you can turn the cold"}
            </p>
            <p>Here are a few tips to embrace winter creativity:</p>
            <ul className="list-disc list-inside">
              <li>Try journaling or sketching by the fireplace.</li>
              <li>Experiment with winter-themed photography.</li>
              <li>
                Use the cozy atmosphere to explore new ideas for writing or
                painting.
              </li>
            </ul>
            <p>
              {"Don't let the winter blues hold you back—embrace the season and let your creativity thrive!"}
            </p>
          </div>
        </article>

        <div className="ring ring-gray-100"></div>

        <aside className="w-1/4 space-y-8">
          <div className="">
            <h2 className="text-xl font-semibold mb-3">Popular Posts</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/blogs/winter-photography"
                  className="text-black/70 hover:underline hover:to-black/90"
                >
                  {"Capturing Winter's Beauty: A Photography Guide"}
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs/seasonal-writing"
                  className="text-black/70 hover:underline hover:to-black/90"
                >
                  How to Use the Seasons to Inspire Your Writing
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs/holiday-diy"
                  className="text-black/70 hover:underline hover:to-black/90"
                >
                  DIY Crafts for a Cozy Winter Home
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm">
                Creativity
              </span>
              <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm">
                Winter
              </span>
              <span className="bg-black/80 text-white/70 px-3 py-1 rounded-full text-sm">
                Inspiration
              </span>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default BlogPage;
