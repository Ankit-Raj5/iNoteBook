import jwt from "jsonwebtoken";

const JWT_SECRET = "Innooooo";

export const fetchuser = (req, res, next) => {
  // get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ message: "*Please authenticate. using avalid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ message: "**Please authenticate using a valid token" });
  }
};
