import BLOG from "../model/blog.model.js";
import sendEmail from "../services/nodemailer.service.js";
import blogEmailTemplate from "../templates/blogEmail.template.js";
import fs from "fs";
import path from "path";
import { getEmailList } from "../utils/subscriber.util.js";
const frontendWebsiteUrl = process.env.FRONTEND_WEBSITE_URL;

const subscribersDir = path.join(process.cwd(), "subscribers");
const user_email = process.env.GOOGLE_USER_EMAIL;

// get blog by slug
const getBlog = async (req, res) => {
  const { slug } = req.params;

  try {
    const blog = await BLOG.findOne({ slug });
    setTimeout(() => {
      return res.status(200).json({ message: "Blog", blog });
    }, 2000);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//  get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BLOG.find({});
    return res.status(200).json({ message: "All Blogs", blogs });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// create blog
const createBlog = async (req, res) => {
  try {
    const { title, slug, description, content, tags, images } = req.body;

    const processedTags = tags.split(",").map((tag) => tag.trim());

    // Create a new blog
    const blog = new BLOG({
      title,
      slug,
      description,
      content,
      tags: processedTags,
      images,
      publishedDate: new Date(),
      views: 0,
    });

    await blog.save();

    // get emails list
    const emailList = await getEmailList();

    const mailOptions = {
      from: `DevDeepBlog ${user_email}`,
      to: user_email,
      bcc: emailList,
      subject: `New Blog Notification: ${title}`,
      html: blogEmailTemplate({
        title,
        slug,
        description,
        publishedDate: new Date().toLocaleDateString(),
        image: images[0].url,
      }),
      headers: {
        "List-Unsubscribe": `<${frontendWebsiteUrl}/email/unsubscribe>`,
        "X-Mailer": "DevDeepBlogMailer",
        "Content-Type": "text/html; charset=UTF-8",
      },
    };

    await sendEmail(mailOptions);

    return res.status(201).json({ message: "Post Created", blog });
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

// update blog
const updateBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      tags,
      description,
      content,
      imagesToDelete,
      images: newImages,
    } = req.body;

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
      {
        title,
        slug,
        description,
        content,
        tags: processedTags,
        images: final_images,
      }
    );

    return res.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    if (!res.headersSent) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

// delete blog
const deleteBlog = async (req, res) => {
  try {
    const { slug } = req.params;
    const isDelete = await BLOG.findOneAndDelete({ slug });
    if (isDelete) {
      return res.status(200).json({ message: "Blog Successfully Deleted" });
    } else {
      return res.status(404).json({ error: "Blog Not Found or Try again" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getBlog, getAllBlogs, createBlog, updateBlog, deleteBlog };
