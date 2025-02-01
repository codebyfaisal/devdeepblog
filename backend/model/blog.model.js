import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => v.length >= 2,
        message: "A blog post must have at least two tags.",
      },
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Blog = mongoose.model("blogs", blogSchema);

export default Blog;
