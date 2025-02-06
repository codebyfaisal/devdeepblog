import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Dashboard, Login, Blogs, Create } from "../pages";

const Main = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default Main;
