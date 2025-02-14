import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import blogRouter from "./routes/blog.route.js";
import connectMongoDB from "./config/mongodb.config.js";
import "./utils/cleanupTemp.util.js";
import adminLogin from "./controllers/adminLogin.controller.js";
import emailRouter from "./routes/email.route.js";
import path from "path";
import { fileURLToPath } from "url";

const frontendWebsiteUrl = process.env.FRONTEND_WEBSITE_URL;
const adminWebsiteUrl = process.env.ADMIN_WEBSITE_URL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: [frontendWebsiteUrl, adminWebsiteUrl],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running" });
});

app.use("/admin/login", adminLogin);

app.use("/api/blogs", blogRouter);
app.use("/api/email", emailRouter);

export default app;
