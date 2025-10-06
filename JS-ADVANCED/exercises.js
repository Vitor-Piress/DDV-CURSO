const nulo = null;
const indefinido = undefined;

// console.log(typeof nulo);
// console.log(typeof indefinido);

const user = {
  name: "name",
  age: 12,
  mail: "123@123.com",
};

const { name, ...ageMail } = user;
// console.log(ageMail);

const numeros = [1, 2, 3];

const [, dois, ...resto] = numeros;
// console.log(dois);

function somaTudo(...args) {
  let total = 0;
  args.forEach((element) => {
    total += element;
  });
  return total;
}

// console.log(somaTudo(1, 2, 3, 4, 5));

const num1 = [1, 2];
const num2 = [3, 4];
const num3 = [...num1, ...num2];

console.log(num3.map((value) => (value *= 2)));

const student = {
  ...user,
  area: "IT",
};

// console.log(student);

const potencia = (num1, num2) => Math.pow(num1, num2);
console.log(potencia(2, 4));

const funcao = (callback) => {
  console.log("imprimir potencia");
  console.log(callback());
};

funcao(() => {
  return Math.pow(2, 4);
});
