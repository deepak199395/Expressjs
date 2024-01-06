const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./Config/db");
const app = express();

// mongodb function import 
connectDB();

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api/v1/user", require("./Routes/userRoutes"));

// Port
const port = 8000;

// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`.bgWhite.green);
});
