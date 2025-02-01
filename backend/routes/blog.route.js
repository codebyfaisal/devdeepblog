import express from "express";
import auth from "../auth/user.auth.js";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blog.controller.js";
import uploadImage from "../middlewares/multer.middleware.js";

const blogRouter = express.Router();

blogRouter
  .get("/post", getAllPosts)
  .post("/post", auth, uploadImage, createPost)
  .put("/post/:postId", auth, updatePost)
  .delete("/post/:postId", auth, deletePost);

export default blogRouter;
