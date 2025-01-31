import React from "react";
import { BlogCard } from "../components";
import { dummyBlog } from "../assets";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";

const AllBlogs = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");
  console.log(searchParams);

  return (
    <section>
      {/* Dynamic meta tags for SEO */}
      <Helmet>
        <title>{"Blogs - " + search[0].toUpperCase() + search.slice(1)}</title>
        <meta name="description" content={"description"} />
        <meta property="og:title" content={"title"} />
        <meta property="og:description" content={"description"} />
        <meta property="og:image" content={"image"} />
        <meta property="og:type" content="article" />
      </Helmet>
      <h1 className="text-2xl font-bold mb-8 capitalize">
        Search for: {search}
      </h1>
      <div className="grid grid-cols-12 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <BlogCard blog={dummyBlog} styles="col-span-12" index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
