import { useEffect, useRef, useState, useContext } from "react";
import TextEditor from "../components/texteditor/TextEditor";
import { StoreContext } from "../context/Store.jsx";
import { useParams } from "react-router";
import { ImageOff, X } from "lucide-react";
import { Loader } from "../components";
import { toast } from "react-toastify";

const Update = () => {
  const { slug } = useParams();
  const { getBlog, fetchBlogs, authenticate } = useContext(StoreContext);
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [slugId, setSlugId] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [prevImages, setPrevImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [images, setImages] = useState([]);
  const [isResponse, setIsResponse] = useState(true);

  const fetchBlog = async () => {
    const fetchedBlog = await getBlog(slug);
    if (fetchedBlog) {
      setBlog(fetchedBlog);
      setTitle(fetchedBlog.title || "");
      setSlugId(fetchedBlog.slug || "");
      setDescription(fetchedBlog.description || "");
      setTags(fetchedBlog.tags?.join(",") || "");
      setPrevImages(fetchedBlog.images || []);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [getBlog]);

  const handlePrevImages = (public_id) => {
    setPrevImages(prevImages.filter((img) => img.public_id !== public_id));
    setImagesToDelete((prev) => [...prev, public_id]);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

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
    const editorContent =
      editorRef.current?.children?.[1]?.children?.[1]?.children?.[0]
        ?.innerHTML || "";

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slugId);
      formData.append("description", description);
      formData.append("content", editorContent);
      formData.append("tags", tags);
      formData.append("imagesToDelete", imagesToDelete);
      images.forEach((image) => formData.append("images", image));

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs`,
        {
          method: "PUT",
          headers: {
            "x-token": authenticate,
          },
          body: formData,
        }
      );

      console.log(authenticate);

      const result = await response.json();
      if (result.message) {
        toast.success(result.message);
        fetchBlogs();
        fetchBlog();
      }
      else if (result.error) toast.error(result.error);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsResponse(true);
    }
  };

  return (
    <div className="mx-auto space-y-4 relative">
      {!isResponse ? (
        <Loader
          className={"absolute left-0 top-0 w-full h-full bg-gray-200/50 z-10"}
        />
      ) : (
        ""
      )}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 justify-center z-[-10]"
      >
        <div className="space-y-4 md:max-w-2xl w-full">
          <h2 className="text-2xl font-semibold">Update Blog</h2>

          {/* Title Input */}
          <div className="space-y-0.5">
            <label
              htmlFor="title"
              className="opacity-90 font-[500] inline-block"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80"
            />
          </div>

          {/* Slug Input */}
          <div className="space-y-0.5">
            <label
              htmlFor="slug"
              className="opacity-90 font-[500] inline-block"
            >
              Slug/Url
            </label>
            <input
              type="text"
              id="slug"
              placeholder="Slug/url"
              value={slugId}
              onChange={(e) => setSlugId(e.target.value.split(" ").join("-"))}
              className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80"
            />
          </div>

          {/* Description */}
          <div className="space-y-0.5">
            <label
              htmlFor="description"
              className="opacity-90 font-[500] inline-block"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80 resize-none"
              rows={4}
            ></textarea>
          </div>

          {/* Text Editor */}
          <div ref={editorRef} className="space-y-0.5">
            <label className="opacity-90 font-[500] inline-block">
              Content
            </label>
            {blog ? (
              <TextEditor content={blog.content} />
            ) : (
              <textarea className="ring ring-black/20 rounded-md focus:ring-black/80 w-full resize-none min-h-[20rem]"></textarea>
            )}
          </div>

          {/* Tags Input */}
          <div className="space-y-0.5">
            <label
              htmlFor="tags"
              className="opacity-90 font-[500] inline-block"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              placeholder="Tags - max 3 tags"
              value={tags}
              onChange={(e) => setTags(e.target.value.trim())}
              className="outline-none w-full px-3 py-2 ring ring-black/20 rounded-md focus:ring-black/80"
            />
            <p>
              {tags
                .split(",")
                .slice(0, 3)
                .map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-black/10 px-2 mr-2"
                  >
                    #{tag.trim()}
                  </span>
                ))}
            </p>
          </div>

          <div className="space-y-0.5 mb-8">
            <label
              htmlFor="slug"
              className="opacity-90 font-[500] inline-block"
            >
              Current Images
            </label>
            <div className="grid grid-cols-3 gap-4 max-h-32">
              {prevImages.length > 0 ? (
                prevImages.map((img) => (
                  <div key={img.public_id} className="group relative h-full">
                    <img
                      src={img.url}
                      loading="lazy"
                      className="w-full h-fit object-cover rounded-md ring ring-black/10 aspect-video"
                    />
                    <X
                      className="absolute top-1 right-1 bg-red-500 rounded-full p-1 cursor-pointer opacity-0 transition duration-200 group-hover:opacity-100"
                      onClick={() => handlePrevImages(img.public_id)}
                    />
                  </div>
                ))
              ) : (
                <div className="w-full h-full aspect-video rounded-md ring ring-black/10 flex justify-center items-center flex-col opacity-70 my-1">
                  <ImageOff />
                  No images
                </div>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-0.5">
            <label
              htmlFor="images"
              className="opacity-90 font-[500] inline-block"
            >
              New Images
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="w-full ring ring-black/20 rounded-md focus:ring-black/80 p-2"
              onChange={handleImageChange}
            />
            <div className="grid grid-cols-3 gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full object-cover aspect-square rounded-md ring ring-black/10"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black/80 text-white py-2 rounded-md mt-4 cursor-pointer hover:bg-black"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
