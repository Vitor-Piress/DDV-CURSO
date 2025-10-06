const produto = {
  nome: "celular",
  preco: 2000,
  isGood: true,
};

// For in pega a propriedade do objeto, detalhe: para acessar o valor da propriedade é mais complexo e diferente = array[elemento]
for (const propriedade in produto) {
  console.log(`${propriedade}: ${produto[propriedade]}`);
}

const numeros = [1, 2, 3, 4, 5, 6];

// For of pega o valor do elemento do array mesmo
for (const numero of numeros) {
  console.log(numero);
}

const palavra = "Jorge";

// For of também pega cada caracter da String
for (const letra of palavra) {
  console.log(letra);
}
