const getAllPosts = (req, res) => {
  return res.status(200).json({ msg: "All posts" });
};

const createPost = (req, res) => {  
  return res.status(200).json({ msg: "Post Created" });
};

const updatePost = (req, res) => {
  return res.status(200).json({ msg: "Post Updated" });
};

const deletePost = (req, res) => {
  return res.status(200).json({ msg: "Post Deleted" });
};

export { getAllPosts, createPost, updatePost, deletePost };
