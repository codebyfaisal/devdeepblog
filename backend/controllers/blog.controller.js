import BLOG from "../model/blog.model.js";

const getAllPosts = async (req, res) => {
  try {
    const blogs = await BLOG.find({});
    return res.status(200).json({ msg: "All posts", blogs });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, tags, content, slug } = req.body;

    // Ensure tags is an array
    const processedTags = Array.isArray(tags)
      ? tags
      : tags.split(",").map((tag) => tag.trim());

    // Create a new blog post
    const blog = new BLOG({
      title,
      publishedDate: new Date(),
      tags: processedTags,
      slug,
      content,
      images: req.imagesUrl || [],
    });

    await blog.save();

    return res.status(201).json({ msg: "Post Created", blog });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({ error: errorMessages });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updatePost = (req, res) => {
  return res.status(200).json({ msg: "Post Updated" });
};

const deletePost = (req, res) => {
  return res.status(200).json({ msg: "Post Deleted" });
};

export { getAllPosts, createPost, updatePost, deletePost };
