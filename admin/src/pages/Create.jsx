import { useRef, useState } from "react";
import TextEditor from "../components/texteditor/TextEditor";

const Create = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const editorRef = useRef();

  const handleSubmit = () => {
    const editorHTML = editorRef.current.children[0].children[1].children[0].innerHTML; // Get HTML from the editor
    console.log("Blog Title:", title);
    console.log("Blog slug:", slug);
    console.log("Editor Content (HTML):", editorHTML);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold">Create New Blog</h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md mb-4 focus:ring-black/80"
      />

      {/* Slug Input */}
      <input
        type="text"
        placeholder="Slug/url"
        value={slug}
        onChange={(e) => setSlug(e.target.value.split(" ").join("-"))}
        className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md mb-4 focus:ring-black/80"
      />

      {/* Description Input */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md mb-4 focus:ring-black/80"
      />

      {/* Reusable TextEditor */}
      <div className="" ref={editorRef}>
        <TextEditor />
      </div>

      {/* Tags Input */}
      <input
        type="text"
        placeholder="Tags - max 3 tags"
        value={tags}
        onChange={(e) => setTags(e.target.value.trim())} // Update tags on input change
        className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md mb-4 focus:ring-black/80"
      />
      <p>
        {tags
          .split(",") // Split tags by commas
          .slice(0, 3) // Limit to the first 3 tags
          .map((tag, index) => (
            <span key={index} className="rounded-lg bg-black/10 px-2 mr-2">
              #{tag.trim()} {/* Trim each tag to remove extra spaces */}
            </span>
          ))}
      </p>

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
