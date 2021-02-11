/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-12 00:35:05
 * @modify date 2021-02-12 01:16:49
 * @desc [Admin middleware]
 */

import jwt from "jsonwebtoken";
import { genUser } from "./auth.middleware.js";

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

/**
 * User Authentiction Middleware
 * @param req Express Requets
 * @param res Express Response
 * @param next Express Next Function
 */

export const instructorAdmin = (req, res, next) => {  
    try {
      const user = genUser(req);
      console.log(user)
      if(user.role !== "instructor"){
        return res.status(401).json({
            message: "You Don't Have Permisson.!",
            status: false,
          });
      }
      req.user = user
      next();
    } catch (e) {
      console.error(e);
      res.status(500).send({
        message: "Invalid Token",
        status: false,
      });
    }
  };