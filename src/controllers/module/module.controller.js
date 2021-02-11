import { Exception, GetErrorCode, PayloadResponse } from "../../services/response.service.js";
import { getModules, getStudentSelectedModules, executeStudentModules } from "./module.helper.js";



/**
 * View Module Controller
 * @param req Express Request
 * @param res Express Response
 */
export const viewModuleController = async (req, res) => {
    console.log("Function view module Execution Started");
    try {
    
      const {user} = req

      if(user.role !== "student"){
        const response = await getModules();
  
        res.status(200).json(
          PayloadResponse("Modules", {
              response
          })
        );
      }else{
        const response = await getStudentSelectedModules(user);
  
        res.status(200).json(
          PayloadResponse("Modules", {
              response
          })
        );
      }



    } catch (err) {
      console.error(err);
      res.status(GetErrorCode(err)).json(Exception(err));
    }
  };





  /**
 * User Execute Module Controller
 * @param req Express Request
 * @param res Express Response
 */
export const ExecuteModule = async (req, res) => {
  console.log("Function ExecuteModule Execution Started");
  try {
  
    const {user} = req
    console.log(user)
    const response = await executeStudentModules(user);

      res.status(200).json(
        PayloadResponse("Modules", {
            response
        })
      );
    



  } catch (err) {
    console.error(err);
    res.status(GetErrorCode(err)).json(Exception(err));
  }
};