import express from "express";
import {
  confirmUnsubscribe,
  getSubscribers,
  subscribe,
  unsubscribe,
  deleteSubscriber
} from "../controllers/email.controller.js";
import auth from "../auth/admin.auth.js";

const emailRouter = express.Router();

// Admin only
// get all subscribers 
emailRouter.get("/subscribers", getSubscribers);
// delete subscription
emailRouter.delete("/subscriber", auth, deleteSubscriber);

// Client
// handle subscription
emailRouter.post("/subscribe", subscribe);
// handle unsubscription
emailRouter.post("/unsubscribe", unsubscribe);
emailRouter.get("/unsubscribe/:code", confirmUnsubscribe);


export default emailRouter;
