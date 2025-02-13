import sendEmail from "../services/nodemailer.service.js";
import welcomeEmailTemplate from "../templates/welcomeEmail.template.js";
import jwt from "jsonwebtoken";
import getConfirmationCode from "../utils/confirmationCode.util.js";
import unsubscribeEmailTemplate from "../templates/unsubscribeEmail.template.js";
import {
  deleteEmail,
  getEmailList,
  isEmailExist,
  storeEmail,
} from "../utils/subscriber.util.js";
const frontendWebsiteUrl = process.env.FRONTEND_WEBSITE_URL;

const user_email = process.env.GOOGLE_USER_EMAIL;
const admin_secret = process.env.ADMIN_SECRET;

//  getAll Subscribers -> admin only
const getSubscribers = async (req, res) => {
  try {
    // get emailList
    const emailList = await getEmailList();

    return res.status(200).json({ subscribers: emailList });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error: Could not process subscription.",
    });
  }
};
// delelte subscriber
const deleteSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);

    // delete email
    await deleteEmail(email);

    return res.status(200).json({ message: "Subscriber remove Successfully" });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error: Could not process unsubscription.",
    });
  }
};

// subscription --> Client side
const subscribe = async (req, res) => {
  try {
    const email = req.body.email.trim();
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (await isEmailExist(email))
      return res.status(409).json({ error: "You already Subscribe" });

    // write email in file
    storeEmail(email);

    // send subscription email
    const mailOptions = {
      from: `DevDeepBlog ${user_email}`,
      to: email,
      subject: `Subscribe to Dev Deep Blog`,
      html: welcomeEmailTemplate({ email }),
    };
    await sendEmail(mailOptions);

    return res.status(201).json({
      message: "🎉 Subscribed successfully! Check your email for updates.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server Error: Could not process subscription.",
    });
  }
};

// request for unsubscribe
const unsubscribe = async (req, res) => {
  try {
    const email = req.body.email.trim();
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // check email exist
    const emailExist = await isEmailExist(email);

    if (!emailExist) return res.status(404).json({ error: "Invalid email" });

    // generate code for 1-hour
    const code = jwt.sign(
      {
        email,
        code: getConfirmationCode(),
      },
      admin_secret,
      { expiresIn: "1h" }
    );

    const mailOptions = {
      from: `DevDeepBlog <${user_email}>`,
      to: email,
      subject: `Unsubscribe Confirmation - DevDeepBlog`,
      html: unsubscribeEmailTemplate(email, code),
      headers: {
        "List-Unsubscribe": `<mailto:${user_email}?subject=unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    };
    await sendEmail(mailOptions);

    return res
      .status(200)
      .json({ message: "Confirmation email to send to you email" });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error: Could not process unsubscription.",
    });
  }
};

// email confirmation Unsubscribe
const confirmUnsubscribe = async (req, res) => {
  try {
    const { code } = req.params;
    const { email, iat } = jwt.verify(code, admin_secret);
    console.log(iat);

    // check if email exists
    const emailExist = await isEmailExist(email);

    if (!emailExist) {
      return res.status(404).render("unsubscribe", {
        message: false,
        error: "Link is expired or invalid. Please request a new link.",
        frontendWebsiteUrl,
      });
    }

    // delete email
    await deleteEmail(email);

    return res.render("unsubscribe", {
      message: "You've Been Successfully Unsubscribed",
      error: false,
      frontendWebsiteUrl,
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).render("unsubscribe", {
        message: false,
        error: "Link has expired. Please request a new link.",
        frontendWebsiteUrl,
      });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).render("unsubscribe", {
        message: false,
        error: "Invalid Link. Please provide a valid link.",
        frontendWebsiteUrl,
      });
    } else {
      console.error("Unexpected error during token verification:", error);
      return res.status(500).render("unsubscribe", {
        message: false,
        error: "Internal Server Error: Could not process unsubscription.",
        frontendWebsiteUrl,
      });
    }
  }
};

export {
  getSubscribers,
  deleteSubscriber,
  subscribe,
  unsubscribe,
  confirmUnsubscribe,
};
