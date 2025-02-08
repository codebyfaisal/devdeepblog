import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout.jsx";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(null);

  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
};

export default App;
