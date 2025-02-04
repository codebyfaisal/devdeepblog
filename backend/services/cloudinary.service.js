import cloudinary from "../config/cloudinary.config.js";
import fs from "fs/promises";

const cloudinaryUpload = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ error: "No files uploaded please try again!" });
    }

    const uploadPromises = req.files.map(async (file) => {
      try {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "devdeepblog",
          public_id: file.filename,
          format: "webp",
        });

        await fs.unlink(file.path); // async unlink

        return { url: result.secure_url, public_id: result.public_id };
      } catch (uploadError) {
        console.error("Cloudinary Upload Error:", uploadError);
        return { error: "Failed to upload image", file: file.filename };
      }
    });

    const uploadedFiles = await Promise.all(uploadPromises);

    req.body = { ...req.body, images: uploadedFiles };

    next();
  } catch (error) {
    console.error("Upload Process Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default cloudinaryUpload;
