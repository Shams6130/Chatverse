import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

const secureRoute = async (req, res, next) => {
  try {
    console.log("token kyu nahi aaraha");
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWTKEY);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    // user_id 
    const user = await User.findById(decoded.user_id).select("-password"); // current loggedin user
    if (!user) {
      return res.status(401).json({ error: "No user found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in secureRoute: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default secureRoute;
