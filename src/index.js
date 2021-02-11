/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-10 14:12:16
 * @modify date 2021-02-10 16:33:02
 * @desc [Application Starting Point]
 */
import app from "./server.js";
import("./database.js");

// Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
