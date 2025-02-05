import jwt from "jsonwebtoken";

const adminLogin = (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);
    if (
      username !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASS
    ) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const token = jwt.sign({ username, password }, process.env.ADMIN_SECRET);

    return res.status(200).json({ msg: "Login Successfully", token });
  } catch (error) {
    console.error("Error Login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default adminLogin;
