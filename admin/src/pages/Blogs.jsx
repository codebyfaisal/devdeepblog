import { useContext, useState } from "react";
import { BlogsContext } from "../context/Blogs.jsx";
import Skeleton from "react-loading-skeleton";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Loader } from "../components";
import { Link } from "react-router";

const Blogs = () => {
  const { blogs, isLoading } = useContext(BlogsContext);
  const [sortedByTitle, setSortedByTitle] = useState(0);
  const [sortedByDate, setSortedByDate] = useState(0);
  const [isResponse, setIsResponse] = useState(true);

  // Sorting logic for Title
  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortedByTitle === 1) return a.title.localeCompare(b.title);
    else if (sortedByTitle === 2) return b.title.localeCompare(a.title);
    else if (sortedByDate === 1)
      return new Date(a.publishedDate) - new Date(b.publishedDate);
    else if (sortedByDate === 2)
      return new Date(b.publishedDate) - new Date(a.publishedDate);
    else return new Date(b.publishedDate) - new Date(a.publishedDate);
  });

  const handleDelete = async (e, slug) => {
    e.preventDefault();
    setIsResponse(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/${slug}`,
        {
          headers: {
            "x-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNPREVCWUZBSVNBTEBHTUFJTC5DT00iLCJwYXNzd29yZCI6IlBFUlNPTkFMX0JMT0cyQ09ERSIsImlhdCI6MTczODc2MTk0OX0.LU9yFjtTw1RlqS-l57XUXJmDUpfaA-XrYqdcD9Yt3Zg",
          },
          method: "DELETE",
        }
      );

      const result = await response.json();
      if (response.status === 200) {
        window.location.reload();
        console.log("Success", result.msg);
      } else {
        console.error("Fail to Delete", result.err);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsResponse(true);
    }
  };

  return (
    <>
      {!isResponse ? (
        <Loader
          className={"absolute left-0 top-0 w-full h-full bg-gray-200/50"}
        />
      ) : (
        ""
      )}
      <h2 className="text-2xl font-semibold mb-4">Blogs</h2>

      {/* Blog Table */}
      <section className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-4 text-left w-10">#</th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  Title
                  <button
                    type="button"
                    className="ml-2 cursor-pointer"
                    onClick={() =>
                      setSortedByTitle((prev) =>
                        prev === 0 ? 1 : prev === 1 ? 2 : 0
                      )
                    }
                  >
                    {sortedByTitle === 1 ? (
                      <ArrowUp color="#666" width={14} height={14} />
                    ) : sortedByTitle === 2 ? (
                      <ArrowDown color="#666" width={14} height={14} />
                    ) : (
                      <ArrowUp color="#aaa" width={12} height={12} />
                    )}
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 text-left">
                <div className="flex items-center">
                  Date
                  <button
                    type="button"
                    className="ml-2 cursor-pointer"
                    onClick={() =>
                      setSortedByDate((prev) =>
                        prev === 0 ? 1 : prev === 1 ? 2 : 0
                      )
                    }
                  >
                    {sortedByDate === 1 ? (
                      <ArrowUp color="#555" width={14} height={14} />
                    ) : sortedByDate === 2 ? (
                      <ArrowDown color="#555" width={14} height={14} />
                    ) : (
                      <ArrowUp color="#aaa" width={12} height={12} />
                    )}
                  </button>
                </div>
              </th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array(3)
                  .fill()
                  .map((_, i) => (
                    <tr
                      key={i}
                      className="border-t border-black/15 hover:bg-gray-100"
                    >
                      <td colSpan={4} className="py-2 px-4">
                        <Skeleton height={30} baseColor="#ccc" />
                      </td>
                    </tr>
                  ))
              : sortedBlogs.map((blog, index) => (
                  <tr
                    key={index}
                    className="border-t border-black/15 hover:bg-gray-100"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4 font-medium">{blog.title}</td>
                    <td className="py-2 px-4">
                      {new Date(blog.publishedDate).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4">
                      <Link
                        to={`/blogs/update/${blog.slug}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 cursor-pointer"
                        onClick={(e) => handleDelete(e, blog.slug)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Blogs;
