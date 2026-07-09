// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
function DarBomDia(nome: string, idade?: number): string {
  if (idade) {
    return `Bom dia, sou ${nome.toUpperCase()} e tenho ${idade} anos`;
  } else {
    return `Bom dia, sou ${nome.toUpperCase()}`;
  }
}

const retorno = DarBomDia("Vitor");
const retornoComIdade = DarBomDia("Vitor", 21);
console.log(retorno);
console.log(retornoComIdade);
