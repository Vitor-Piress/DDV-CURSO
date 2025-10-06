let comidas = ["pizza", "hamburguer", "arroz"];

console.log(comidas);

comidas.push("frango");

console.log(comidas);

comidas.pop();

console.log(comidas);

comidas.shift();

console.log(comidas);

comidas = ["pizza", "hamburguer", "arroz"];
console.log("Length: " + comidas.length);

for (let i = 0; i < comidas.length; i++) {
  const comida = comidas[i];
  console.log(`${i + 1} ${comida}`);
}
