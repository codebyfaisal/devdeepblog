import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { BlogsContext } from "../context/Blogs.jsx";

const FeatureBlog = () => {
  const { getFeatureBlog } = useContext(BlogsContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(getFeatureBlog());
  }, [getFeatureBlog]);

  return (
    <article className="feature-Blog w-full">
      {/* Dynamic meta tags for SEO */}
      {blog ? (
        <>
          {/* Feature Blog Container */}
          <div className="relative overflow-hidden rounded-md md:max-h-[70vh] shadow-md group">
            <img
              src={blog.images[0].url}
              alt={blog.title}
              className="w-full h-full object-cover object-center min-h-40 group-hover:scale-[1.025] transition-transform duration-300"
            />

            <div className="sm:absolute sm:inset-0 flex flex-col justify-end p-3 sm:p-6 sm:bg-gradient-to-t from-black via-transparent to-transparent sm:text-white">
              {/* Blog Title */}
              <Link to={`/blogs/${blog.slug}`}>
                <h1 className="text-3xl sm:text-5xl font-extrabold mb-2">
                  {blog.title}
                </h1>
              </Link>

              {/* Blog Meta */}
              <div className="text-sm mb-4">
                <time dateTime="2025-01-30" className="mr-2">
                  {new Date(blog.publishedDate).toLocaleDateString()}
                </time>
                <span className="text-gray-300">|</span>
                <span className="ml-2">
                  By{" "}
                  <Link to="/author" className="text-blue-400 hover:underline">
                    Muhammad Faisal
                  </Link>
                </span>
              </div>

              {/* Blog Description */}
              <p className="text-md sm:text-lg">{blog.description}</p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </article>
  );
};

export default FeatureBlog;
