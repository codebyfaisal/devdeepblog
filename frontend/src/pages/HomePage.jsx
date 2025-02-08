import React from "react";
import { FeatureBlog, LatestBlogs } from "../components";
import { HomeHelmet } from "../components/helmet";

const HomePage = () => {
  return (
    <>
      <HomeHelmet/>
      <FeatureBlog />
      <LatestBlogs />
    </>
  );
};

export default HomePage;
