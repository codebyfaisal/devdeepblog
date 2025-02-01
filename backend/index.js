import express from "express";
import cors from "cors";
import "dotenv/config";
import process from "process";
import auth from "./auth/user.auth.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// CORS configuration
// const corsOptions = {
//   origin: 'http://your-frontend-domain.com', // Replace with your frontend domain
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };
// app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running" });
});

app.get("/blog", auth, (req, res) => {
  res.status(200).json({ msg: "Authenticated" });
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
