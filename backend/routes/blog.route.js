import express from "express";
import auth from "../auth/user.auth.js";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blog.controller.js";
import multerUpload from "../middlewares/multerUpload.middleware.js";
import cloudinaryUpload from "../services/cloudinary.service.js";

const blogRouter = express.Router();

blogRouter
  .get("/post", getAllPosts)
  .post("/post", auth, multerUpload, cloudinaryUpload, createPost)
  .put("/post", auth, multerUpload, cloudinaryUpload, createPost)
  .delete("/post/:postSlug", auth, deletePost);

export default blogRouter;
