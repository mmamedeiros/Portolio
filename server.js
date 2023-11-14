const express = require("express"); // requerido o express - ele já entende que o ejs já está numa pasta views
const app = express(); // instanceado o express na const app

app.set("view engine", "ejs"); // .set chama a tag express

app.get("/", function (req, res) {
  // "res" = response; req = reqerir
  // app.get cria uma rota para rodar nosso index ; "/" é o nosso dominio
 
  res.render('/index');
});



app.listen(8080);
console.log("SERVIDOR RODANDO");
