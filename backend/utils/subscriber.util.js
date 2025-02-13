import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const subscribersDir = path.join(__dirname, "../data");
const filePath = path.join(subscribersDir, "subscribers.txt");

const readSubscribers = async () => {
  const data = await fs.promises.readFile(filePath, "utf8");
  return data;
};

const isEmailExist = async (email) => {
  const data = await readSubscribers();
  const emailExist = data
    .split("\n")
    .slice(0, -1)
    .find((e) => e.trim() === email);

  return emailExist;
};

const getEmailList = async () => {
  const data = await readSubscribers();
  return data.split("\n").slice(0, -1);
};

const storeEmail = (email) => {
  fs.appendFile(filePath, email + "\n", (err) => {
    if (err) throw err;
  });
};

const deleteEmail = async (email) => {
  const data = await readSubscribers();

  // split into array -> get only emails -> delete the email
  const emailList = data
    .split("\n")
    .slice(0, -1)
    .filter((e) => e.trim() !== email.trim());

  // rewrite the remaining emails
  await fs.promises.writeFile(filePath, emailList.join("\n") + "\n");
};

export { readSubscribers, isEmailExist, getEmailList, storeEmail, deleteEmail };
