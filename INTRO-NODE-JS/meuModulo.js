function ola(nome) {
  return `Olá ${nome}!`;
}

module.exports = {
  ola,
  nome: "Cleiton",
};

/* 
exports.nome = "Cleiton";
exports.ola = ola; 
*/

console.log(module.exports);
