import express from "express";
import auth from "../auth/user.auth.js";
import {
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
  .get("/post", getAllBlogs)
  .post("/post", auth, multerUpload, cloudinaryUpload, createBlog)
  .put("/post", auth, multerUpload, cloudinaryUpload, updateBlog)
  .delete("/post/:slug", auth, deleteCloudinary, deleteBlog);

export default blogRouter;
