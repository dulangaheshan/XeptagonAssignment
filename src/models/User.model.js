/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:14:49
 * @modify date 2021-02-10 15:33:46
 * @desc [user model]
 */
import mongoosePaginate from "mongoose-paginate-v2";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(mongoosePaginate);

export default mongoose.model("User", UserSchema);
