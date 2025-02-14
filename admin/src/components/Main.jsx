import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Dashboard, Login, Blogs, Create, Update, Subscribers } from "../pages";

const Main = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs">
          <Route index element={<Blogs />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:slug" element={<Update />} />
        </Route>
        <Route path="subscribers" element={<Subscribers />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default Main;
