const pessoa = {
  nome: "Jorge",
  idade: 12,
  cidade: "SJ",
};

const { idade } = pessoa;
const { cidade: municipio } = pessoa;

console.log(idade);
console.log(municipio);

const numeros = [1, 2, 3, 4];

const [primeiro] = numeros;
const [, segundo, , quarto] = numeros;

console.log(segundo);
console.log("");

// Yes, I'm the author of the comment not an AI model. I wrote it in english because I want to practice my english
// The same as apresentar(pessoa) -> pessoa.nome && pessoa.idade
function apresentar({ nome, idade }) {
  console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
}

apresentar(pessoa);

function somarEMultiplicar(a, b) {
  return [a + b, a * b];
}

const [soma, multiplicacao] = somarEMultiplicar(1, 3);
// const resultado = somarEMultiplicar(1, 3)
// const soma = resultado[0]
// const multiplicar = resultado[1]
console.log(soma, multiplicacao);
