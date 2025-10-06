class Escola {
  constructor(genero, nome, nivel, modalidade, valor) {
    this.genero = genero;
    this.nome = nome;
    this.nivel = nivel;
    this.modalidade = modalidade;
    this.valor = valor;
  }

  apresentar() {
    console.log(
      `Olá, somos ${this.genero} ${this.nome}, atuamos no ${this.nivel}, na modalidade ${this.modalidade}`
    );
    if (this.valor) {
      console.log(`Comece a estudar com investimento mínimo de ${this.valor}`);
    }
  }
}

const Senai = new Escola(
  "o",
  "SENAI",
  "ensino médio e técnico",
  "privada",
  1000
);

Senai.apresentar();

console.log("\n");

const UFSC = new Escola("a", "UFSC", "ensino superior", "pública");
UFSC.apresentar();
