/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:14:49
 * @modify date 2021-02-11 20:58:17
 * @desc [class model]
 */
import mongoosePaginate from "mongoose-paginate-v2";

import mongoose from "mongoose";
import InstructorModel from "./Instructor.model.js";
import StudentModel from "./Student.model.js";
const Schema = mongoose.Schema;

const ClassSchema = Schema(
  { 
    classname:{
      type: String,
      required:true,
    },   
    instructor:{
      type: {InstructorModel},
      required:true,
    },   
    modules: {
      type: [],
      required: true,
    },
    students:{
        type: [StudentModel],
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

ClassSchema.plugin(mongoosePaginate);

export default mongoose.model("Class", ClassSchema);