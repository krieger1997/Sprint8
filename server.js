const express = require('express');
require('./models') // procesamiento de modelos
require("dotenv").config()
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const { engine } =require('express-handlebars');
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

  app.engine('handlebars', engine({
    partialsDir:'views/partials/'
  }));
  app.set('view engine', 'handlebars');
  app.set('views', './views');


const authRouter = require("./routes/auth.router");
const skaterRouter = require("./routes/skater.router");

app.use("/api/auth", authRouter);
app.use("/api/skater", skaterRouter);


app.use(express.static('public'));//para poder usar lo de public en el front


app.get('/',(req,res)=>{
    res.render('home',{
        signIn:true
    })
})


app.get('/signUp',(req,res)=>{
    res.render('home',{
        signUp:true
    })
})











app.listen(process.env.PORT,()=> console.log(`Listening on port ${process.env.PORT}`))