import React from "react";

const blogs = [
  { id: 1, title: "How to Build a Blog", author: "John Doe", date: "Jan 5, 2025" },
  { id: 2, title: "React Tips & Tricks", author: "Jane Smith", date: "Jan 3, 2025" },
  { id: 3, title: "Understanding JavaScript Closures", author: "Alex Brown", date: "Jan 1, 2025" },
];

const Blogs = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Blogs</h2>

      {/* Blog Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id} className="border-t border-black/15 hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 font-medium">{blog.title}</td>
                <td className="py-2 px-4">{blog.date}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Blogs;
