/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:14:49
 * @modify date 2021-02-11 21:21:39
 * @desc [student model]
 */
import mongoosePaginate from "mongoose-paginate-v2";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudentSchema = 
  {
    _id:{
        type:String,
        required: true
    },
    username: {
      type: String,
      required: true,
    }
  };

// StudentSchema.plugin(mongoosePaginate);

export default StudentSchema;
