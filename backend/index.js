const express = require("express");
const mainRouter = require("./routess/index")
const userRouter = require("./routess/user")
const cors = require('cors')
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const app = express();
app.use("/api/v1" ,mainRouter)
app.use("/api/vi/user" ,userRouter)




app.listen(3000);