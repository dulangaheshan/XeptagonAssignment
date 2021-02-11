/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:29:29
 * @modify date 2021-02-12 01:41:34
 * @desc [user routes]
 */
import expressValidator from "express-joi-validation";
import express from "express";

const router = express.Router();

// Controller
import {
  userLoginController,
  UserSignUpController,
  InstructorCreateController
} from "../controllers/users/users.controller.js";

// Validators
import {
  AddUserInstructor,
  LoginValidator,
  SignUpValidator,
} from "../validators/user.validator.js";
import { authAdmin } from "../middleware/adminAuth.middleware.js";

const validator = expressValidator.createValidator({
  passError: true,
});

/**
 * @api {get} /api/users/login
 * @apiName User Login
 *
 * @apiParam  {String} [username] Username
 * @apiParam  {String} [password] Password
 *
 * @apiSuccess (200) {Object} `User` object with Jwt Token
 */
router.post("/login", validator.body(LoginValidator), userLoginController);

/**
 * @api {get} /api/users/signup
 * @apiName User Registration
 *
 * @apiParam  {String} [username] Username
 * @apiParam  {String} [password] Password
 * @apiParam  {String} [role] Role
 * 
 * @apiSuccess (200) {Object} `User` object with Jwt Token
 */
router.post("/signup", validator.body(SignUpValidator), UserSignUpController);

/**
 * @api {post} /api/user/createinstructor
 * @apiName Create new Instructor
 *
 * @apiParam  {String} [username] User Name
 *
 * @apiSuccess (200) {Object} Success Message Object with instructor obj
 */
router.post("/createinstructor", authAdmin, validator.body(AddUserInstructor), InstructorCreateController);


export default router;
