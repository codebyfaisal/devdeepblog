import { createContext, useState, useEffect } from "react";

const BlogsContext = createContext(null);

const BlogsProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/api/blogs/all"
        );
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

  const getBlog = (slug) => {
    const blog = blogs.find((b) => slug === b.slug);
    return blog;
  };

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs, isLoading, getBlog }}>
      {props.children}
    </BlogsContext.Provider>
  );
};

export { BlogsProvider, BlogsContext };
