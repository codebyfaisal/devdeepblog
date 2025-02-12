import nodemailer from "nodemailer";
import { google } from "googleapis";

// Environment variables
const client_id = process.env.GOOGLE_CLIENT_ID;
const client_secret = process.env.GOOGLE_CLIENT_SECRET;
const refresh_token = process.env.GOOGLE_REFRESH_TOKEN;
const user_email = process.env.GOOGLE_USER_EMAIL;

// OAuth2 Client Setup
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  "https://developers.google.com/oauthplayground"
);
oAuth2Client.setCredentials({ refresh_token: refresh_token });

async function sendEmail(mailOptions) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: user_email,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refresh_token,
        accessToken: accessToken.token,
      },
    });    

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Failed to send email");
  }
}

export default sendEmail;
