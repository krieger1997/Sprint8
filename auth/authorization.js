const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) {
    console.log("no viene autorización");
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  try {

    let [type, token] = authorization.split(" ");

    if (type === "Bearer" || type === "Token") {
      const openToken = jwt.verify(token, process.env.SECRET);
      console.log(openToken);
      next();
    } else {
      console.log("PRFIJO INCORRECTO");
      return res.status(401).json({ message: 'Unauthorized access' });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).render('home',{
        signIn:true
    })
  }

}