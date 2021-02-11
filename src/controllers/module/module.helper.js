/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-11 23:26:33
 * @modify date 2021-02-12 02:09:49
 * @desc [Module helper]
 */
import moduleEnum from "../../enums/module.enum.js";
import ClassModel from "../../models/Class.model.js";

/**
 * View Modules
 */
export const getModules = async () => {
   
    return moduleEnum;
    
  };
  
/**
 * View Student Selected Modules
 */
export const getStudentSelectedModules = async (user) => {
  console.log(`view modules by student`, user);
    try{
        const results = await ClassModel.find({
            students: { $elemMatch: {"_id": user.id, "username": user.username } }
          });
         let response =  filterModules(results, moduleEnum)

         return response

    }catch(e){
      throw err;
    }

    
  };

  /**
 * filter Moduled
 * @param queryResults Student's Documents
 * @param moduleEnum module enum
 */

const filterModules = (queryResults, moduleEnum) => {
  let classDeatils = {}
  console.log(queryResults)
  queryResults.forEach(result => {
    let modules = []
    for(let moduleId of result.modules){
      modules.push(moduleEnum[moduleId])
    }
    classDeatils[result.classname] = modules
    
  });

 return classDeatils;
}
  

  /**
 * Execute Student Modules
 * @param user Student
 */

export const executeStudentModules = async (user) => {
  console.log(`execute modules by student`, user);
    try{
        const results = await ClassModel.find({
            students: { $elemMatch: {"_id": user.id, "username": user.username } }
          });
         let response =  filterModulesForExecute(results, moduleEnum)

         return response

    }catch(e){
      throw err;
    }

    
  };


    /**
 * filter Moduled
 * @param queryResults Student's Documents
 * @param moduleEnum module enum
 */


  const filterModulesForExecute = (queryResults, moduleEnum) => {
    let classDeatils = {}
    console.log(queryResults)
    queryResults.forEach(result => {
      let modules = {}
      for(let moduleId of result.modules){
        console.log(moduleId, "mod id")
        modules[moduleId] = `Hello Module ${moduleEnum[moduleId]}`
      }
      console.log(modules)
      classDeatils[result.classname] = modules
      
    });
  
   return classDeatils;
  }
   