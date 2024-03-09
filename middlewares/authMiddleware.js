import jwt from "jsonwebtoken";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, admin) => {
      if (error) {
        return error.name === "TokenExpiredError" ? res.status(401).json({ message: "Token has expired" }) : res.status(403).json({ message: error.message });
      }
      req.admin = admin;
      console.log("ADMIN : ", admin);
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized for admin access" });
  }
};
  