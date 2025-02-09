import { useContext, useEffect, useState } from "react";
import { BlogCard } from ".";
import { BlogsContext } from "../context/Blogs.jsx";

const LatestBlogs = () => {
  const { getBlogs } = useContext(BlogsContext);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    setBlogs(getBlogs());
  }, [getBlogs]);

  return (
    <section>
      <h1 className="text-5xl font-bold mb-8">Latest Blogs</h1>
      {blogs ? (
        <div className="grid grid-cols-12 gap-4">
          {blogs.slice(1).map((blog, i) => (
            <BlogCard blog={blog} styles="col-span-12" index={i} key={i} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default LatestBlogs;
