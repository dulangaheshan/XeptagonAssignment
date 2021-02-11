/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-11 03:22:24
 * @modify date 2021-02-12 01:36:07
 * @desc [class routes]
 */


import expressValidator from "express-joi-validation";
import express from "express";
import { instructorAdmin } from "../middleware/instructorAuth.middleware.js";
import { AddUserValidtor } from "../validators/user.validator.js";
import { ClassCreateController } from "../controllers/class/class.controller.js";




const router = express.Router();

const validator = expressValidator.createValidator({
    passError: true,
  });

/**
 * @api {post} /api/user/createclass
 * @apiName Create new Class
 *
 * @apiParam  {String} [classname] Class Name
 * @apiParam  {[int]} [modules] Module enum list
 * @apiParam  {[Student]} [students] Student object list
 * @apiSuccess (200) {Object} Success Message Object
 */
router.post("/createclass", instructorAdmin, ClassCreateController);


export default router;