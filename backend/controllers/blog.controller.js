import BLOG from "../model/blog.model.js";

const getBlog = async (req, res) => {
  const { slug } = req.params;
  console.log(req.params);

  try {
    const blog = await BLOG.findOne({ slug });
    setTimeout(() => {
      return res.status(200).json({ msg: "Blog", blog });
    }, 2000);
  } catch (error) {
    console.error("Error fething Blogs:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BLOG.find({});
    setTimeout(() => {
      return res.status(200).json({ msg: "All Blogs", blogs });
    }, 2000);
  } catch (error) {
    console.error("Error fething Blogs:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, slug, description, content, tags, images } = req.body;

    console.log(req.body);

    const processedTags = tags.split(",").map((tag) => tag.trim());

    // Create a new blog post
    const blog = new BLOG({
      title,
      slug,
      description,
      content,
      tags: processedTags,
      images,
      publishedDate: new Date(),
    });

    await blog.save();

    return res.status(201).json({ msg: "Post Created", blog });
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({ error: errorMessages });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, slug, tags, description, content, imagesToDelete, images: newImages } = req.body;

    const processedTags = tags.split(",");
    const blog = await BLOG.findOne({ slug });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const filtered_images = blog.images.filter(
      (b_img) => !imagesToDelete.split(",").includes(b_img.public_id)
    );
    const safeNewImages = Array.isArray(newImages) ? newImages : [];

    const final_images = [...filtered_images, ...safeNewImages];

    await BLOG.findOneAndUpdate(
      { slug },
      { title, slug, description, content, tags: processedTags, images: final_images }
    );

    return res.status(200).json({ msg: "Blog updated successfully" });

  } catch (error) {
    console.error("Error updating Blog:", error);
    
    if (!res.headersSent) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { slug } = req.params;
    const isDelete = await BLOG.findOneAndDelete({ slug });
    if (isDelete) {
      return res.status(200).json({ msg: "Blog Successfully Deleted" });
    } else {
      return res.status(404).json({ err: "Blog Not Found or Try again" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getBlog, getAllBlogs, createBlog, updateBlog, deleteBlog };
