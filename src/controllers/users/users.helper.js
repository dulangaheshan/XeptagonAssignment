/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:14:27
 * @modify date 2021-02-12 01:08:17
 * @desc [user functions]
 */
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

// Models
import User from "../../models/User.model.js";

/**
 * User Login
 * @param username UserName
 * @param password Password
 */
export const userLogin = async (username, password) => {
  console.log(`Logging User ${username}`);
  try {
    const user = await User.findOne({
      username: username
    });
    if (!user) throw Error("User Not Exists:400");

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) throw Error("Incorrect Password!:400");

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, JWT_TOKEN_SECRET, {
      expiresIn: "24h",
    });
    return token;
  } catch (err) {
    throw err;
  }
};

/**
 * User Signup
 * @param username Username
 * @param password Password
 */
export const userSignUp = async (username, password, role) => {
  console.log(`Signup User. Username ${username}`);

   const payload =  await addUser(username, password, role)

    const token = jwt.sign(payload, JWT_TOKEN_SECRET, {
      expiresIn: "24h",
    });
    return token;
  
};




/**
 * Add user
 * @param username Username
 * @param password Password
 */
export const addUser = async (username, password, role) => {
  console.log(`addUser. Username ${username, password, role}`);
  try {
    let user = await User.findOne({
      username: username,
    });
    if (user && role !== 'student') throw Error("User Already Exists:400");
    if (user && role === 'student') return {user:{id: user.id,username, password: "user already exist", role: user.role}};
    user = new User({
      username: username,
      password: password,
      role: role
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
        username,
        password,
        role,
      },
    };


    return payload;
  } catch (err) {
    console.log(err, "errr")
    throw err;
  }
};