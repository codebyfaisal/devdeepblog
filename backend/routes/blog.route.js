import express from "express";
import auth from "../auth/admin.auth.js";
import {
  getBlog,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";
import multerUpload from "../middlewares/multerUpload.middleware.js";
import cloudinaryUpload from "../services/cloudinary.service.js";
import deleteCloudinary from "../services/delete.cloudinary.service.js";

const blogRouter = express.Router();
blogRouter
  .get("/all", getAllBlogs)
  .get("/:slug", getBlog)
  .post("/", auth, multerUpload, cloudinaryUpload, createBlog)
  .put("/", auth, multerUpload, cloudinaryUpload, updateBlog)
  .delete("/:slug", auth, deleteCloudinary, deleteBlog);
export default blogRouter;
