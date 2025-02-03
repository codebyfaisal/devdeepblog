import multer from "multer";
import BLOG from "../model/blog.model.js";

const storage = multer.memoryStorage();

// File filtering to validate image types
const fileFilter = (req, file, cb) => {
  // image or not
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

// validation, and size limit
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).array("images", 3);

// handle Multer errors
const uploadImage = (req, res, next) => {
  upload(req, res, async (err) => {
    // return if blog slug already exist
    const processSlug = req.body.slug.trim().toLowerCase().split(" ").join("-");
    if (req.method === "POST" || req.method === "post") {
      const isBlog = await BLOG.findOne({ slug: processSlug });
      if (isBlog) {
        return res.status(400).json({ msg: "Slug/Url already exist" });
      }
    }
    req.body.slug = processSlug;

    if (err) {
      return handleError(err, res);
    }
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    next();
  });
};

// Function to handle errors for better separation of concerns
const handleError = (err, res) => {
  if (err instanceof multer.MulterError) {
    // Multer-specific errors (e.g., file size, count)
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Maximum 4 files allowed" });
    }
    return res.status(400).json({ error: err.message });
  }
  // Other general errors (e.g., file type validation)
  return res.status(400).json({ error: err.message });
};

export default uploadImage;
