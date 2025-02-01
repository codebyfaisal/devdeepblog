import express from "express";
import auth from "../auth/user.auth.js";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter
  .get("/posts", getAllPosts)
  .post("/posts", auth, createPost)
  .put("/posts/:postId", auth, updatePost)
  .delete("/posts/:postId", auth, deletePost);

export default blogRouter;
