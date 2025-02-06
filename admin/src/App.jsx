import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout.jsx";
import { useState } from "react";

const App = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(null);
  
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
