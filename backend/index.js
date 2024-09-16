const express = require("express");
const app = express();
const mainRouter = require("./routess/index");
const accountRouter= require("./routess/account");
const userRouter = require("./routess/user");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", mainRouter);       // Correct version
app.use("/api/v1/user", userRouter);   // Correct version
app.use("/api/v1/account", accountRouter);   // Correct version
 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
