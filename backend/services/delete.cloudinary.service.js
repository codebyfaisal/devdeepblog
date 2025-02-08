import cloudinary from "../config/cloudinary.config.js";
import BLOG from "../model/blog.model.js";

const deleteCloudinary = async (req, res, next) => {
  try {
    // empty array
    let publicIds = [];
    
    // if request is POST
    if (req.method === "delete" || req.method === "DELETE") {
      const { slug } = req.params;
      const isBlogExist = await BLOG.findOne({ slug });
      publicIds = isBlogExist.images.map((img) => img.public_id);
    }

    // if request if PUT
    if (req.method === "put" || req.method === "PUT") {
      publicIds = req.body.imagesToDelete.split(",");
      console.log(req.body);      
    }

    await cloudinary.api.delete_resources(publicIds);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
  next();
};

export default deleteCloudinary;
