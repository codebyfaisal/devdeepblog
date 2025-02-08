import { useEffect, useRef, useState } from "react";
import TextEditor from "../components/texteditor/TextEditor";
import { Loader } from "../components";
import { toast } from "react-toastify";

const Create = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [isResponse, setIsResponse] = useState(true);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Filter only image files
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    // Limit to max 3 images
    if (images.length + imageFiles.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }

    setImages((prev) => [...prev, ...imageFiles]);
  };

  const editorRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsResponse(false);
    const editorHTML =
      editorRef.current.children[0].children[1].children[0].innerHTML;
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("description", description);
      formData.append("content", editorHTML);
      formData.append("tags", tags);
      images.forEach((image) => formData.append("images", image));

      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/blogs",
        {
          headers: {
            "x-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNPREVCWUZBSVNBTEBHTUFJTC5DT00iLCJwYXNzd29yZCI6IlBFUlNPTkFMX0JMT0cyQ09ERSIsImlhdCI6MTczODc2MTk0OX0.LU9yFjtTw1RlqS-l57XUXJmDUpfaA-XrYqdcD9Yt3Zg",
          },
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.status === 200) {
        console.log(result.msg);
        toast.success("Blog Successfully Created");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (response.status === 400) {
        console.error(result.error);
        toast.error(result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsResponse(true);
    }
  };

  return (
    <section className="mx-auto space-y-4 relative">
      {!isResponse ? (
        <Loader
          className={"absolute left-0 top-0 w-full h-full bg-gray-200/50 z-10"}
        />
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-2xl font-semibold">Create New Blog</h2>
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80"
          />

          {/* Slug Input */}
          <input
            type="text"
            placeholder="Slug/url"
            name="slug"
            value={slug}
            required
            onChange={(e) =>
              setSlug(e.target.value.split(" ").join("-").toLowerCase())
            }
            className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80 resize-none"
            rows={4}
          ></textarea>

          {/* Reusable TextEditor */}
          <div className="z-[-10]" ref={editorRef}>
            <TextEditor />
          </div>

          {/* Tags Input */}
          <input
            type="text"
            placeholder="Tags - max 3 tags"
            name="tags"
            value={tags}
            required
            onChange={(e) => setTags(e.target.value.trim().toLowerCase())} // Update tags on input change
            className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80"
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

          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            className="w-full ring ring-black/20 rounded-md focus:ring-black/80 p-2"
            onChange={handleImageChange}
          />
          <div className="grid grid-cols-3 gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Uploaded ${index + 1}`}
                className="w-full object-cover aspect-square rounded-md ring ring-black/10"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-black/80 text-white py-2 rounded-md mt-4 cursor-pointer hover:bg-black"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;
