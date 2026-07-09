/* --- Generics --- */
console.log("\n--- Generics ---\n");

// Ao invés disso:
function obterPrimeiroNumero(arr: number[]): number | undefined {
  return arr[0];
}
function obterPrimeiraString(arr: string[]): string | undefined {
  return arr[0];
}

// Faça isso:
function obterPrimeiroIndex<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(obterPrimeiroIndex([1, 2, 3]));
console.log(obterPrimeiroIndex(["jorge", "matheus", "tiago"]));
console.log(obterPrimeiroIndex([true, false, true, false]));
console.log(
  "\n--------------------------------------------------------------\n",
);
/* --- Generics & Interface c/ Classe */
console.log("\n--- Generics & Interface c/ Classe ---\n");

interface Repositorio<T> {
  adicionar(item: T): void;
  obterTodos(): T[];

  lista: T[];
}

class UsuarioRepositorio implements Repositorio<string> {
  lista: string[];

  constructor() {
    this.lista = [];
  }

  adicionar(item: string): void {
    this.lista.push(item);
  }
  obterTodos(): string[] {
    return this.lista;
  }
}

class Caixa<T> {
  private conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }

  obterConteudo(): T {
    return this.conteudo;
  }
}

const caixaNumero = new Caixa<number>(12);
console.log(
  `Conteudo: ${typeof caixaNumero.obterConteudo()} -`,
  caixaNumero.obterConteudo(),
);

const caixaString = new Caixa<string>("Jorge");
console.log(
  `Conteudo: ${typeof caixaString.obterConteudo()} -`,
  caixaString.obterConteudo(),
);
