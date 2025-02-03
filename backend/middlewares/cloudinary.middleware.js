import cloudinary from "../config/cloudinary.config.js";
import sharp from "sharp";
import BLOG from "../model/blog.model.js";

const uploadToCloudinary = async (req, res, next) => {
  try {
    const image_name = (title) =>
      (title + Math.random().toString().split(".")[1])
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .trim();
    
    // Helper function that wraps the Cloudinary upload_stream in a promise.
    const uploadBuffer = (buffer, options) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          options,
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              return reject(error);
            }
            // Resolve with the Cloudinary result when done.
            resolve(result);
          }
        );
        stream.end(buffer);
      });
    };

    // Process each image, upload to Cloudinary, and collect the resulting URLs.
    const imagesUrl = await Promise.all(
      req.files.map(async (image) => {
        // Process the image using sharp.
        const processedBuffer = await sharp(image.buffer)
          .toFormat("webp")
          .toBuffer();

        // Upload the processed image to Cloudinary.
        const result = await uploadBuffer(processedBuffer, {
          public_id: image_name(req.body.title),
          resource_type: "image",
          folder: process.env.CLOUDINARY_FOLDER,
          format: "webp",
        });
        return result.url;
      })
    );
    req.imagesUrl = imagesUrl;
    next();
  } catch (error) {
    console.error("Error in uploadToCloudinary:", error);
    res.status(500).json({ message: "Image upload failed", error });
  }
};

export default uploadToCloudinary;
