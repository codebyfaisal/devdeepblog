import express from "express";
import auth from "../auth/user.auth.js";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blog.controller.js";
import uploadImage from "../middlewares/multer.middleware.js";
import uploadToCloudinary from "../middlewares/cloudinary.middleware.js";

const blogRouter = express.Router();

blogRouter
  .get("/post", getAllPosts)
  .post("/post", auth, uploadImage, uploadToCloudinary, createPost)
  .put("/post/:postSlug", auth, uploadImage, uploadToCloudinary, updatePost)
  .delete("/post/:postSlug", auth, deletePost);

export default blogRouter;
