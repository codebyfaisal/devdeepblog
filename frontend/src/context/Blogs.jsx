import { createContext, useState, useEffect } from "react";
const backend_url = import.meta.env.VITE_API_URL;
const BlogsContext = createContext(null);

const BlogsProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(backend_url + "/api/blogs/all");
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getBlogs = () => {
    const blog = blogs.sort(
      (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    return blog;
  };

  const getBlog = (slug) => {
    if (!slug) return null;
    const blog = blogs.find((b) => slug === b.slug);
    return blog || null;
  };

  const getFeatureBlog = () => {
    const blog = blogs.sort(
      (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    return blog[0];
  };

  return (
    <BlogsContext.Provider
      value={{ getBlogs, isLoading, getBlog, getFeatureBlog }}
    >
      {props.children}
    </BlogsContext.Provider>
  );
};

export { BlogsProvider, BlogsContext };
