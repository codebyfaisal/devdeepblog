import multer from "multer";

// Multer to store files in memory
const storage = multer.memoryStorage();

// File filtering to validate image types
const fileFilter = (req, file, cb) => {
  // Check if the file is an image
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

// Set up Multer with storage, file validation, and size limit
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).array("images", 4);

// Middleware to handle Multer errors and proceed with the request
const uploadImage = (req, res, next) => {
  console.log(req);

  // Proceed with the upload
  upload(req, res, (err) => {
    if (err) {
      return handleError(err, res);
    }
    next(); // No errors, move to the next middleware/controller
  });
};

// Function to handle errors for better separation of concerns
const handleError = (err, res) => {
  if (err instanceof multer.MulterError) {
    // Multer-specific errors (e.g., file size, count)
    if (err.code === "LIMIT_UNEXPECTED_FILE")
      return res.status(400).json({ error: "Maximum 4 files allowed" });
    else return res.status(400).json({ error: err.message });
  } else if (err) {
    // Other general errors (e.g., file type validation)
    return res.status(400).json({ error: err.message });
  }
};

export default uploadImage;
