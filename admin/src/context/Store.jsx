import { createContext, useState, useEffect } from "react";
const viteApiUrl = import.meta.env.VITE_API_URL;
const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(viteApiUrl + "/api/blogs/all");
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubscribers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(viteApiUrl + "/api/email/subscribers");
      const data = await response.json();
      setSubscribers(data.subscribers || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticate(token ? token : false);
    fetchBlogs();
    fetchSubscribers();
  }, [authenticate]);

  const getSubscribers = () => subscribers;

  const getBlog = (slug) => {
    const blog = blogs.find((b) => slug === b.slug);
    return blog;
  };

  return (
    <StoreContext.Provider
      value={{
        blogs,
        setBlogs,
        isLoading,
        getBlog,
        getSubscribers,
        fetchBlogs,
        fetchSubscribers,
        authenticate,
        setAuthenticate,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
