/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-11 04:21:25
 * @modify date 2021-02-12 01:48:45
 * @desc [class controllers]
 */

import { Exception, GetErrorCode, PayloadResponse } from "../../services/response.service.js";
import { GenrateRandomPassword } from "../../services/utils.service.js";
import { addUser } from "../users/users.helper.js";
import { addClass } from "./class.helper.js";

/**
 * Ceate Class
 * @param students [{Students}]
 * @param classname classname
 * @param modules [modules]
 */
export const ClassCreateController = async (req, res) => {
    console.log("Function ClassCreation Execution Started");

    const {students, classname, modules} = req.body;
    const addedstudents = []
    const studentRes = []
    
    for await (const user of students.map(student => addUser(student.username, GenrateRandomPassword(student.username), student.role))) {
        addedstudents.push(user.user)
        studentRes.push({
          "username": user.user.username, 
          "_id": user.user.id
        })
      }

    try {

      const payload = await addClass(studentRes, classname, modules, req.user);
      payload.newClass.students = addedstudents
      res.status(200).json(PayloadResponse(classname + "class Added Success", payload));
    } catch (err) {
      console.error(err);
      res.status(GetErrorCode(err)).json(Exception(err));
    
    }
  };