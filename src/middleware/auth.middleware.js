/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:15:53
 * @modify date 2021-02-12 01:45:03
 * @desc [auth middleware]
 */
import jwt from "jsonwebtoken";

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

/**
 * User Authentiction Middleware
 * @param req Express Requets
 * @param res Express Response
 * @param next Express Next Function
 */
export const auth = (req, res, next) => {  
  try {
    req.user = genUser(req);
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: "Invalid Token",
      status: false,
    });
  }
};



/**
 * Generate User From Token
 * @param req Express Requets
 * 
 * @returns user object
 */

export const genUser = (req) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({
      message: "Auth Error",
      status: false,
    });
  if (!token)
    return res.status(401).json({
      message: "Auth Error",
      status: false,
    });

    try {
      console.log(token.split(" ")[1], JWT_TOKEN_SECRET, "hghghg")
      const decoded = jwt.verify(token, JWT_TOKEN_SECRET);
      req.user = decoded.user;
      return decoded.user
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: "Invalid Token",
        status: false,
      });
    }
}
