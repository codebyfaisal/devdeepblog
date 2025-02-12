import sendEmail from "../services/nodemailer.service.js";
import welcomeEmailTemplate from "../templates/welcomeEmail.template.js";
import fs from "fs";
import path from "path";

const subscribersDir = path.join(process.cwd(), "subscribers");

const user_email = process.env.GOOGLE_USER_EMAIL;

const getSubscribers = async (req, res) => {
  try {
    // read emails file
    const data = await fs.promises.readFile(
      subscribersDir + "/subscriber.txt",
      "utf8"
    );

    // split into array -> get only emails -> delete the email
    const emailList = data.split("\n").slice(0, -1);

    return res.status(200).json({ subscribers: emailList });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error: Could not process subscription.",
    });
  }
};

const subscribe = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // read emails file
    const data = await fs.promises.readFile(
      subscribersDir + "/subscriber.txt",
      "utf8"
    );

    // split into array -> get only emails -> delete the email
    const emailExist = data
      .split("\n")
      .slice(0, -1)
      .find((e) => e === email);

    if (emailExist)
      return res.status(400).json({ error: "You already Subscribe" });

    fs.appendFile(subscribersDir + "/subscriber.txt", email + "\n", (err) => {
      if (err) throw err;
    });

    const mailOptions = {
      from: `DevDeepBlog ${user_email}`,
      to: email,
      subject: `Subscribe to Dev Deep Blog`,
      html: welcomeEmailTemplate({ email }),
    };
    await sendEmail(mailOptions);

    return res.status(200).json({
      message: "🎉 Subscribed successfully! Check your email for updates.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error: Could not process subscription.",
    });
  }
};

const unsubscribe = async (req, res) => {
  try {
    const email = req.body.email;
    console.log(email);
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // read emails file
    const data = await fs.promises.readFile(
      subscribersDir + "/subscriber.txt",
      "utf8"
    );

    // split into array -> get only emails -> delete the email
    const emailList = data
      .split("\n")
      .slice(0, -1)
      .filter((e) => e !== email);

    // rewrite the remaining emails
    await fs.promises.writeFile(
      subscribersDir + "/subscriber.txt",
      emailList.join("\n") + "\n"
    );

    return res.status(200).json({ message: "unSubscribed successfully!" });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error: Could not process subscription.",
    });
  }
};

export { subscribe, unsubscribe, getSubscribers };
