/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:29:59
 * @modify date 2021-02-12 00:33:53
 * @desc [validators]
 */
import Joi from "joi";

export const LoginValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const SignUpValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});

export const AddUserInstructor = Joi.object({
  username: Joi.string().required(),
});

export const AddUserValidtor = Joi.object({
  username: Joi.string().required(),
  role: Joi.string().required(),
});


// export const CreateClassValidator = Joi.object({
//   username: Joi.string().required(),
//   role: Joi.string().required(),
// });