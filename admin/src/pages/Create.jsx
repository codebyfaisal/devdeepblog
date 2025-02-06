import React, { useState } from "react";
import TextEditor from "../components/TextEditor/TextEditor.jsx";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Store editor content

  const handleSubmit = () => {
    console.log("Blog Title:", title);
    console.log("Blog Content:", content);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create New Blog</h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-4"
      />

      {/* Reusable TextEditor */}
      <TextEditor />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
      >
        Publish Blog
      </button>
    </div>
  );
};

export default Create;
