import React from "react";
import { PostCard } from ".";
import { dummyPost } from "../assets";

const LatestBlogs = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-12 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <PostCard post={dummyPost} styles="col-span-12" index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
