/* --- Objetos --- */

let pessoa: { name: string; idade: number; endereco?: string };

pessoa = {
  idade: 12,
  name: "Jorge",
  endereco: "dedaedasd",
};

/* --- Interfaces --- */

interface Pessoa {
  name: string;
  idade: number;
  readonly faculdade?: boolean;
  endereco?: string;
}

let pessoa02: Pessoa = {
  name: "Vitor",
  faculdade: true,
  idade: 21,
};

/*
Readonly não é possível alterar posteriormente, somente na instanciação

pessoa02.faculdade = true;
// Error: Cannot assign to 'faculdade' because it is a read-only property.

*/
function imprimir(pessoa: Pessoa): void {
  console.log("Nome:", pessoa.name);
  console.log("Idade:", pessoa.idade);
}

imprimir(pessoa02);
// console.log(pessoa02)

/* ------------------ */

/*
Não seria só utilizar type ao invés de interfaces?
R: Sim e Não. Funciona? Sim! Porém a interface é exclusiva para uso com Objetos, assim trazendo algumas características únicas como por exemplo: Extends(herança)

BTW type funciona como um alias; Trazendo apenas um apelido para a tipagem que está sendo definida (atalho/apelido)

type PessoaType = { name: string; idade: number; endereco?: string };

let pessoa03: PessoaType = {
	name: "teste",
	idade: 12,
};
*/
