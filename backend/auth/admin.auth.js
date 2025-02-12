import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers["x-token"];
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const admin = jwt.verify(token, process.env.ADMIN_SECRET);
    
    if (
      admin.username !== process.env.ADMIN_EMAIL ||
      admin.password !== process.env.ADMIN_PASS
    ) {
      return res.status(403).json({ error: "Not authorized. Login again." });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};

export default auth;
