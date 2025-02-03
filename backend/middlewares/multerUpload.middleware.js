import multer from "multer";
import upload from "./multer.middleware.js";
import BLOG from "../model/blog.model.js";

const multerUpload = (req, res, next) => {
  upload(req, res, async (err) => {
    // Check if Multer threw an error
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        return res.status(400).json({ error: "Maximum 4 files allowed" });
      }    
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: "File upload failed" }); // Unknown error
    }

    // Check if images are provided
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        error: "No images uploaded. Please upload at least one image.",
      });
    }

    if (req.method === "POST" || req.method === "post") {
      const slug = req.body.slug
      const isBlog = await BLOG.findOne({ slug});
      if (isBlog) {
        return res.status(400).json({ msg: "Slug/Url already exist" });
      }
      req.body.slug = processSlug;
    }

    next();
  });
};

export default multerUpload;
