import multer from "multer";
import upload from "./multer.middleware.js";
import BLOG from "../model/blog.model.js";
import fs from "fs/promises";

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
      const isBlog = await BLOG.findOne({ slug: req.body.slug });
      if (isBlog) {
        if (req.files && req.files.length > 0) {
          req.files.forEach(async (file) => {
            await fs.unlink(file.path);
          });
        }
        return res.status(400).json({ msg: "Slug/Url already exist" });
      }
    }

    next();
  });
};

export default multerUpload;
