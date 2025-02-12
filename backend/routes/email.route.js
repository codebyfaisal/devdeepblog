import express from "express";
import {
  getSubscribers,
  subscribe,
  unsubscribe,
} from "../controllers/email.controller.js";

const emailRouter = express.Router();
emailRouter.get("/subscribers", getSubscribers);
emailRouter.post("/subscribe", subscribe);
emailRouter.post("/unsubscribe", unsubscribe);
export default emailRouter;
