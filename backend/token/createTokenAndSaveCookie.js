import jwt from "jsonwebtoken"
const createTokenAndSaveCookie = (user_id, res) => {
    console.log({user_id});
  const token = jwt.sign({ user_id }, process.env.JWTKEY, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss
    secure: true,
    sameSite: "strict",
  });
};
export default createTokenAndSaveCookie;
