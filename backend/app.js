import express from "express";
import cors from "cors";
import "dotenv/config";
import blogRouter from "./routes/blog.route.js";
import connectMongoDB from "./config/mongodb.config.js";
import "./utils/cleanupTemp.util.js";
import adminLogin from "./controllers/adminLogin.controller.js";
import emailTemplate from "./templates/blogEmail.template.js";
import emailRouter from "./routes/email.route.js";

connectMongoDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// CORS configuration
// const corsOptions = {
//   origin: 'http://your-frontend-domain.com', // Replace with your frontend domain
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };
// app.use(cors(corsOptions));
app.use(cors());

app.get("/", (req, res) => {
  // res.status(200).json({ message: "Server running" });

  res.send(emailTemplate(blog));
});

app.use("/admin", adminLogin);

app.use("/api/blogs", blogRouter);
app.use("/api/email", emailRouter);

export default app;
