/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 15:29:29
 * @modify date 2021-02-12 01:40:31
 * @desc [module routes]
 */


import express from "express";

// Validators
import { auth } from "../middleware/auth.middleware.js";

// Controller
import { 
    ExecuteModule, 
    viewModuleController 
} from "../controllers/module/module.controller.js";

const router = express.Router();



/**
 * @api {get} /api/modules/viewmodules
 * @apiName View Modules
 * 
 * @apiSuccess (200) {Object} `Module` object
 */
router.get("/viewmodules", auth,  viewModuleController);



/**
 * @api {get} /api/modules/executemodule
 * @apiName Execute Modules
 * 
 * @apiSuccess (200) {Object} `Module` object Execte Start msg
 */
router.get("/executemodule", auth,  ExecuteModule);


export default router;