import BLOG from "../model/blog.model.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BLOG.find({});
    return res.status(200).json({ msg: "All Blogs", blogs });
  } catch (error) {
    console.error("Error fething Blogs:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, tags, content, slug, images } = req.body;

    const processedTags = tags.split(",").map((tag) => tag.trim());

    // Create a new blog post
    const blog = new BLOG({
      title,
      publishedDate: new Date(),
      tags: processedTags,
      slug,
      content,
      images,
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
    const {
      title,
      slug,
      tags,
      content,
      imagesToDelete,
      images: newImages,
    } = req.body;

    // Ensure imagesToDelete is an array
    const imagesToDeletes = [imagesToDelete];

    // Prepare update object for other fields
    let updateFields = {};
    if (title) updateFields.title = title;
    if (tags) updateFields.tags = tags;
    if (content) updateFields.content = content;

    const blog = await BLOG.findOne({ slug });

    const filtered_images = blog.images.filter(
      (b_img) => !imagesToDeletes.includes(b_img.public_id)
    );
    // Combine the filtered images with the new_images
    const final_images = [...filtered_images, ...newImages];

    console.log(final_images);

    if(title || tags || content) {
      await BLOG.findOneAndUpdate(
        { slug },
        {
          images: final_images,        
          ...updateFields
        }
      );      
    } else {
      await BLOG.findOneAndUpdate(
        { slug },
        {
          images: final_images,
        }
      );     
    }
    
    return res.status(200).json({ msg: "Blog updated successfully" });
  } catch (error) {
    console.error("Error updating Blog:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { slug } = req.params;
    const isDelete = await BLOG.findOneAndDelete({ slug });
    if (isDelete) {
      return res.status(200).json({ msg: "Blog Successfully Deleted" });
    } else {
      return res.status(404).json({ msg: "Blog Not Found or Try again" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllBlogs, createBlog, updateBlog, deleteBlog };
