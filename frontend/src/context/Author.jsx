import { createContext, useState } from "react";

const AuthorContext = createContext(null);

const AuthorProvider = (props) => {
  const [author, setAuthor] = useState({
    name: "Muhammad Faisal",
  });

  return (
    <AuthorContext.Provider value={author}>
      {props.children}
    </AuthorContext.Provider>
  );
};

export { AuthorProvider, AuthorContext };
