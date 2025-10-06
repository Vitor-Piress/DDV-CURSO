/* Crie uma variável do tipo  number  e outra do tipo  string . Converta a variável do 
tipo  number  para  string  e a do tipo  string  para  number */

let num = 1;
let string = "2";

let resNum = typeof String(num);
let resString = typeof parseInt(string);
console.log(resString);
console.log(resNum);

/* Defina duas variáveis booleanas ( true  e  false ) e use operadores lógicos AND, 
OR, NOT para criar diferentes combinações de resultados. */
const verdade = true;
const falso = false;

const resposta =
  verdade == true && falso == false ? "Tudo ok!" : "Tudo errado!";

console.log(resposta);

// let contador = 1;

// while (contador <= 100) {
//   console.log(contador++);
// }

/* Crie uma função que receba um array de números e retorne apenas os 
números pares. */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pares(array) {
  for (let i = 0; i < numeros.length; i++) {
    numero = numeros[i];
    if (numero % 2 == 0) console.log(numero);
  }
}

pares(numeros);

function fatorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(fatorial(4)); // Deve retornar 24 (4! = 4 * 3 * 2 * 1)
console.log(fatorial(5)); // Deve retornar 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(fatorial(0)); // Deve retornar 1 (0! = 1)
