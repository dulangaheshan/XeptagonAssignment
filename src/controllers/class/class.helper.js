import ClassModel from "../../models/Class.model.js";


/**
 * Create New Note
 * @param students Studets[]
 * @param classname classname
 * @param modules module[]
 * @param instructor {isntructor}
 */

export const addClass = async (students, classname, modules, instructor) => {
    console.log(`addClass. fpr ${students, classname, modules, instructor}`);
    try {
    let existclass = await ClassModel.findOne({
        classname: classname,
    });
    if (existclass) throw Error("Class Already Exists:400");
     const newClass = new ClassModel({
        instructor: instructor,
        classname: classname,
        modules: modules,
        students: students
      });

      await newClass.save();

  
      const payload = {
        newClass: {
            instructor: instructor,
            classname: classname,
            modules: modules,
            students: students
        },
      };
      console.log(payload, "qwertyuiop")
      return payload;
    } catch (err) {
      console.log(err, "errr")
      throw err;
    }
  };