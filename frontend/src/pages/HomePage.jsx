import React from "react";
import { FeatureBlog, LatestBlogs } from "../components";
import { HomeHelmet } from "../components/helmet";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      <HomeHelmet />
      <FeatureBlog />
      <LatestBlogs />
    </motion.section>
  );
};

export default HomePage;
