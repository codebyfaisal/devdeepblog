import multer from "multer";

// File filtering to validate image types
const fileFilter = (req, file, cb) => {
  // check if request is put and file are or not
  if ((req.method === "put" || req.method === "PUT") && !file) {
    return cb(null, false);
  }
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e9);
    const processedSlug = req.body.slug.split(" ").join("-").toLowerCase();
    req.body.slug = processedSlug;
    cb(null, processedSlug + "-" + uniqueSuffix);
  },
});

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).array("images", 3);

export default upload;
