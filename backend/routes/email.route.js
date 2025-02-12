import express from "express";
import { subscribe, unsubscribe } from "../controllers/email.controller.js";

const emailRouter = express.Router();
emailRouter.post("/subscribe", subscribe);
emailRouter.post("/unsubscribe", unsubscribe);
export default emailRouter;
