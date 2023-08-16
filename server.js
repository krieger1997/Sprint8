const express = require('express');
require('./models') // procesamiento de modelos
require("dotenv").config()
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 1024 * 1024 * 5
  
    },
    abortOnLimit: true,
  }));

const authRouter = require("./routes/auth.router");

app.use("/api/auth", authRouter);













app.listen(process.env.PORT,()=> console.log(`Listening on port ${process.env.PORT}`))