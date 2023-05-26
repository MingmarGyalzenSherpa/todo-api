const express = require("express");
const appConfig = require("./config/config");
const bodyParser = require("body-parser");
const router = require("./routes/index.route");
const userRouter = require("./routes/user.route");
const todoRouter = require("./routes/todo.route");
const getConnection = require("./config/db");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const conn = getConnection();

//middleware
app.use("/todo", (req, res, next) => {
  req.conn = conn;
  next();
});

//routes
app.use("/", router);
app.use("/user", userRouter);
app.use("/todo", todoRouter);

//server activation
app.listen(appConfig.PORT, () => {
  console.log("server is running at ", appConfig.PORT);
});
