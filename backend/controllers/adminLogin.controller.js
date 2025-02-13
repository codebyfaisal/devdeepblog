import jwt from "jsonwebtoken";

const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    if (
      email.trim() !== process.env.ADMIN_EMAIL ||
      password.trim() !== process.env.ADMIN_PASS
    ) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const token = jwt.sign({ email, password }, process.env.ADMIN_SECRET);

    return res.status(200).json({ message: "Login Successfully", token });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default adminLogin;
