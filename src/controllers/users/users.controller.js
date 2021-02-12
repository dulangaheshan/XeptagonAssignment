/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:15:08
 * @modify date 2021-02-12 13:55:23
 * @desc [User Controller]
 */
import {
  Exception,
  GetErrorCode,
  PayloadResponse,
} from "../../services/response.service.js";
import { GenrateRandomPassword } from "../../services/utils.service.js";
import { addUser, userLogin, userSignUp } from "./users.helper.js";

/**
 * User Login Controller
 * @param req Express Request
 * @param res Express Response
 */
export const userLoginController = async (req, res) => {
  console.log("Function userLoginController Execution Started");
  try {
    const { username, password } = req.body;
    const token = await userLogin(username, password);

    res.status(200).json(
      PayloadResponse("Login Success", {
        token: token,
        username: username,
      })
    );
  } catch (err) {
    console.error(err);
    res.status(GetErrorCode(err)).json(Exception(err));
  }
};

/**
 * User Signup Controller
 * @param req Express Request
 * @param res Express Response
 */
export const UserSignUpController = async (req, res) => {
  console.log("Function userSignUpController Execution Started");
  try {
    const { username, password, role } = req.body;
    if(role === 'admin'){
      throw Error("Admin Already Exists:400");
    }
    const token = await userSignUp(username, password, role);

    res.status(200).json(
      PayloadResponse("Signup Success", {
        token: token,
        username: username,
      })
    );
  } catch (err) {
    console.error(err);
    res.status(GetErrorCode(err)).json(Exception(err));
  }
};



/**
 * Instructor Create Controller
 * @param req Express Request
 * @param res Express Response
 */
export const InstructorCreateController = async (req, res) => {
  console.log("Function create Instructor Execution Started");
  try {
    const { username } = req.body;
    const role =  "instructor"
    const user = await addUser(username, GenrateRandomPassword(username),role);

    res.status(200).json(PayloadResponse("instructor Added Success", user));
  } catch (err) {
    console.error(err);
    res.status(GetErrorCode(err)).json(Exception(err));
  }
};