//Spread - espalhar
const frutas = ["banana", "maca", "limao", "pera"];
const salgados = ["coxinha", "pastel", "pizza"];

const comidas = [...frutas, ...salgados];

console.log(comidas);

const pessoa = {
  nome: "joao",
  idade: 12,
};

const endereco = {
  rua: "r adalberto",
  numero: 24,
};

const combinacao = {
  ...pessoa,
  ...endereco,
  idade: 15,
};

console.log(combinacao);

// Rest - compactar

function somar(...numeros) {
  let total = 0;

  numeros.forEach((numero) => (total += numero));
  return total;
}

const total = somar(1, 2, 3, 4, 5, 6);
console.log(total);

const numeros = [1, 2, 3, 4, 5, 6];

// Destructuring two firsts index from numeros[] and stocking rest in a variable using Rest Operator
const [primeiro, segundo, ...restante] = numeros;

console.log(restante);

// The same works to objects

const aluno = {
  name: "name",
  age: 12,
  course: "course",
  duration: 6,
};

const { name, ...restanteAluno } = aluno;

console.log(restanteAluno);
