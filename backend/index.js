import express from "express";
import cors from "cors";
import "dotenv/config";
import process from "process";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running" });
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
