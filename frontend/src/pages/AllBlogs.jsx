import { useContext, useEffect, useState } from "react";
import { BlogCard } from "../components";
import { dummyBlog } from "../assets";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router";
import { BlogsContext } from "../context/Blogs.jsx";
import { HomeHelmet } from "../components/helmet";

const AllBlogs = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q") || ""; // Ensure search is never null
  const { getBlogs } = useContext(BlogsContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("Search query:", search);

    if (!search || search === "all") {
      setBlogs(getBlogs());
      return;
    }

    const searchBlogs = getBlogs().filter((blog) =>
      blog.tags.some((tag) => tag.toLowerCase() === search.toLowerCase())
    );

    console.log("Filtered Blogs:", searchBlogs);

    setBlogs(searchBlogs);
  }, [getBlogs, search]);

  return (
    <section>
      {/* Dynamic meta tags for SEO */}
      <HomeHelmet/>

      <h1 className="text-2xl font-bold mb-8 capitalize">
        {search ? `Result for: ${search}` : "All Blogs"}
      </h1>

      <div className="grid grid-cols-12 gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogCard
              blog={blog}
              styles="col-span-12"
              index={index}
              key={blog._id}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-12">No blogs found.</p>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
