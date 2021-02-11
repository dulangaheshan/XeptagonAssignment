/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:14:49
 * @modify date 2021-02-11 12:22:23
 * @desc [Instructor model]
 */
import mongoosePaginate from "mongoose-paginate-v2";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const InstructorSchema = Schema(
  {
    
    instructorid:{
        type:String,
        required: true
    },
    username: {
      type: String,
      required: true,
    }
  }
);

InstructorSchema.plugin(mongoosePaginate);

export default mongoose.model("Instructor", InstructorSchema);
