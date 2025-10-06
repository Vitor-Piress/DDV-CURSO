/* const numeros = [1, 2, 3, 4];

// Array.map itera sobre o array, ou seja, ele cria algo novo em cima do array.
const dobro = numeros.map((numero) => numero * 2);
console.log(dobro);

// teste
console.log(numeros.map((numero) => numero * 2));
// Array.forEach uma maneira mais simples e agradavel de se escrever um for para arrays
numeros.forEach((numero) => console.log(numero * 2));

// Array.filter é literalmente um filtro
const filtro = numeros.filter((elemento) => elemento % 2 === 0);

console.log(filtro);

// Array.find é literalmente para achar a primeira ocorrência de algo no array
const achar = numeros.find((elemento) => elemento === 2);

console.log(achar);

// Array.some verifica se há aquele elemento no array
const some = numeros.some((elemento) => elemento === 3);
console.log(some);

// Array.every verifica se todo os elementos do array condizem com a condição
const every = numeros.every((elemento) => elemento === 3);
console.log(every);
*/

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 49 },
  { nome: "Monitor", preco: 800 },
];

const filtroMenor50 = produtos.filter((produto) => {
  if (produto.preco < 50) return produto;
});
console.log(filtroMenor50);

const caixaAlta = produtos.map((produto) => {
  return {
    ...produto,
    nome: produto.nome.toUpperCase(),
  };
});
console.log(caixaAlta);

caixaAlta.forEach((elemento) => {
  return console.log(`Produto ${elemento.nome}, Valor R$${elemento.preco}`);
});

const todosMaisQue100 = produtos.every((elemento) => elemento.preco > 100);
console.log(todosMaisQue100);
