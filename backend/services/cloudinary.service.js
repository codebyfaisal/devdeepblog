import cloudinary from "../config/cloudinary.config.js";
import fs from "fs/promises";
import deleteCloudinary from "./delete.cloudinary.service.js";

const cloudinaryUpload = async (req, res, next) => {
  try {
    if (
      (req.method === "put" || req.method === "PUT") &&
      (!req.files || req.files.length === 0)
    ) {
      // if request is put but no new image and need to delete an old images
      if (req.body.imagesToDelete) deleteCloudinary(req, res, next);
      return next();
    }
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ error: "No files uploaded please try again!" });
    }

    const uploadPromises = req.files.map(async (file) => {
      try {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "devdeepblog/",
          public_id: file.filename,
          format: "webp",
        });

        await fs.unlink(file.path); // async unlink

        return { url: result.secure_url, public_id: result.public_id };
      } catch (uploadError) {
        return { error: "Failed to upload image", file: file.filename };
      }
    });

    const uploadedFiles = await Promise.all(uploadPromises);

    req.body = { ...req.body, images: uploadedFiles };

    // if request is PUT and images need to delete
    if (
      (req.method === "put" || req.method === "PUT") &&
      req.body.imagesToDelete
    ) {
      deleteCloudinary(req, res, next);
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Errorrr" });
  }
};

export default cloudinaryUpload;
