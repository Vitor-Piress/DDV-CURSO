class Periferico {
  constructor(tipo, finalidade) {
    this.tipo = tipo;
    this.finalidade = finalidade;
  }

  declarar() {
    console.log(`Eu sou um ${this.tipo} e sirvo para ${this.finalidade}`);
  }
}

class Teclado extends Periferico {
  constructor(tipo, finalidade, marca, modelo, tecla) {
    super(tipo, finalidade);
    this.marca = marca;
    this.modelo = modelo;
    this.tecla = tecla;
  }

  teclar() {
    console.log("Teclando: tec tec tec");
  }

  declarar() {
    console.log(
      `Eu sou um ${this.tipo}, da marca ${this.marca}, de modelo ${this.modelo}, com teclas ${this.tecla} e sirvo para ${this.finalidade}`
    );
  }
}

const meuTeclado = new Teclado(
  "Teclado",
  "Teclar",
  "HyperX",
  "Alloy Origins Core",
  "Mecânico"
);

meuTeclado.declarar();
meuTeclado.teclar();
