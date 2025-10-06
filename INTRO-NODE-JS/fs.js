const fs = require("fs");

/* 
fs.mkdirSync("teste");
fs.writeFileSync(
  "./teste/teste.txt",
  "Esse arquivo foi criado pelo node.js fazendo uso do fs"
);


const teste = fs.readFileSync("./teste/teste.txt");

console.log(teste.toString());

fs.unlinkSync("./teste/teste.txt");

fs.rmdirSync("./teste");
*/

const conteudo = fs.readdirSync("../DDV");
console.log(conteudo);
