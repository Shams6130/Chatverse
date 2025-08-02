import jwt from "jsonwebtoken";
const createTokenAndSaveCookie = (user_id, res) => {
  console.log({ user_id });
  const token = jwt.sign({ user_id }, process.env.JWTKEY, {
    expiresIn: "10d",
  });
   const isProduction = process.env.NODE_ENV === "production";
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax", 
  });
};
export default createTokenAndSaveCookie;
