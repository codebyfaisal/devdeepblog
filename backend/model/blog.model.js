import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    author: {
      type: String,
      default: process.env.ADMIN_NAME,
      trim: true,
    },
    publishedDate: {
      type: Date,
      required: [true, "Published date is required."],
    },
    tags: {
      type: [String],
      required: [true, "At least two tags are required."],
      validate: {
        validator: (v) => Array.isArray(v) && v.length >= 2,
        message: "A blog post must have at least two tags.",
      },
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required."],
    },
    images: [
      {
        url: {
          type: String,
          default: Math.random() + "a",
        },
        public_id: {
          type: String,
          default: Math.random() + "a",
        },
      },
    ],
  },
  { timestamps: true }
);

blogSchema.index({ publishedDate: 1 });

const BLOG = mongoose.model.blog || mongoose.model("blog", blogSchema);

export default BLOG;
