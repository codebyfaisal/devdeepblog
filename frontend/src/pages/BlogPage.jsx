import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { BlogsContext } from "../context/Blogs.jsx";

const formatSlug = (slug) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Pagination = ({ slug }) => (
  <div className="flex items-center font-bold mb-4">
    <Link to="/" className="hover:underline">
      Home
    </Link>
    <ChevronRight />
    <Link to="/blogs" className="hover:underline">
      Blogs
    </Link>
    <ChevronRight />
    <span className="text-gray-700 cursor-default">{formatSlug(slug)}</span>
  </div>
);

const BlogPage = () => {
  const { slug } = useParams();
  const { getBlog } = useContext(BlogsContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(getBlog(slug));
  }, [getBlog, slug]);

  return (
    <>
      <Helmet>
        <title>{formatSlug(slug)}</title>
        <meta
          name="description"
          content={`Explore insights on ${formatSlug(
            slug
          )}. Read the latest blog post now!`}
        />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={formatSlug(slug)} />
        <meta
          property="og:description"
          content={`An insightful blog on ${formatSlug(
            slug
          )}. Discover valuable information!`}
        />
        <meta
          property="og:image"
          content={blog?.images[0].url || "/default-image.jpg"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://devdeepblog.vercel.app/blogs/${slug}`}
        />

        {/* Twitter Cards */}
        <meta
          name="twitter:card"
          content={blog?.images[0].url || "/default-image.jpg"}
        />
        <meta name="twitter:title" content={formatSlug(slug)} />
        <meta
          name="twitter:description"
          content={`Read our latest insights on ${formatSlug(slug)}.`}
        />
        <meta
          name="twitter:image"
          content={blog?.images[0].url || "/default-image.jpg"}
        />
      </Helmet>

      <Pagination slug={slug} />

      <section className="flex flex-col gap-6 relative lg:flex-row">
        {blog ? (
          <article className="lg:w-3/4 p-8 bg-gray-50 blog">
            <p className="opacity-80 text-sm mb-1">
              Published by: Muhammad Faisal
            </p>
            <p className="opacity-80 text-sm mb-4">
              Published at:{" "}
              {blog.publishedDate
                ? new Date(blog.publishedDate).toLocaleDateString()
                : "Unknown"}
            </p>

            <div className="max-h-96">
              <img
                src={blog.images[0].url}
                alt={formatSlug}
                loading="lazy"
                className="w-full object-cover aspect-video"
              />
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        ) : (
          <p className="w-3/4 p-8">Loading...</p>
        )}

        <aside className="p-8 lg:p-0 lg:w-1/4 space-y-8 blog relative">
          {blog?.tags?.length > 0 && (
            <div className="space-y-3 sticky">
              <h2 className="text-xl font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <Link
                    key={i}
                    to={`/blogs/search?q=${tag}`}
                    className="bg-black/70 text-white/80 px-3 py-1 rounded-full text-sm cursor-pointer hover:text-white"
                    style={{ letterSpacing: "1px" }}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>
    </>
  );
};

export default BlogPage;
