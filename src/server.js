/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-11 03:18:13
 * @modify date 2021-02-11 15:34:23
 * @desc [description]
 */
import express from "express";
import bodyParser from "body-parser";


import userRoute from "./routes/user.routes.js";
import classRoute from "./routes/class.routes.js";
import moduleRoute from "./routes/module.routes.js";
// Initializations
const app = express();

// Parse application/json
app.use(bodyParser.json());

// Settings
app.set("port", process.env.PORT);

// Routes
app.use("/api/user", userRoute);
app.use("/api/class", classRoute);
app.use("/api/module", moduleRoute);


// Data Validation Custom Response
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    res.status(400).json({
      errors: err.error.details.map((error) => {
        return {
          key: error.path[0],
          message: error.message,
        };
      }),
      message: "Data Validation Failed",
      success: false,
    });
  } else {
    next(err);
  }
});

// Not Found
app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end("Not Found");
});

export default app;
