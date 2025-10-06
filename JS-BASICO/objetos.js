const aluno = {
  isOn: true,
  age: 18,
  name: "Cleiton",
  endereco: {
    rua: "R. Jorginho",
    numero: 151,
  },
  apresentar() {
    const frase = `${this.name} mora na ${this.endereco.rua} n° ${this.endereco.numero} e tem ${this.age} anos`;
    console.log(frase);
  },
};

// console.log(aluno);

// aluno.isOn = false;

// console.log(aluno);

console.log(aluno.endereco);
console.log(aluno.endereco.rua);
console.log(aluno.endereco.numero);

aluno.apresentar();
