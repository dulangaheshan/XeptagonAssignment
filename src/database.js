/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 14:44:02
 * @modify date 2021-02-12 01:29:32
 * @desc [db connection]
 */
import mongoose from "mongoose";
import config from "./config.js";

const MONGODB_URI = `mongodb+srv://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));
