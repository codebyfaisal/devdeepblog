import { createContext, useState, useEffect } from "react";

const WebsiteContext = createContext(null);

const WebsiteProvider = (props) => {
  const [author, setAuthor] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    setAuthor(import.meta.env.VITE_AUTHOR);
    setWebsite({
      name: import.meta.env.VITE_WEBSITE_NAME,
      url: import.meta.env.VITE_WEBSITE_URL,
      image: import.meta.env.VITE_WEBSITE_IMAGE,
      image_large: import.meta.env.VITE_WEBSITE_IMAGE_L,
    });
  }, []);

  const getAuthor = () => author;
  const getWebsite = () => website;

  return (
    <WebsiteContext.Provider value={{ getAuthor, getWebsite }}>
      {props.children}
    </WebsiteContext.Provider>
  );
};

export { WebsiteProvider, WebsiteContext };
