function somaNormal(a, b) {
  return a + b;
}
console.log(somaNormal(1, 2));

const somaArrow = (a, b) => {
  return a + b;
};
console.log(somaArrow(1, 2));

const somaPequena = (a, b) => a + b;
console.log(somaPequena(1, 2));

const quadradoMinusculo = (a) => a * a;
console.log(quadradoMinusculo(2));

// Arrow functions não tem acesso ao this em objetos
const pessoa = {
  name: "name",
  age: 12,
  hi: () => {
    console.log(this.name);
  },
};

pessoa.hi();
