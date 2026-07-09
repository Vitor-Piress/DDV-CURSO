/* --- Union Types --- */

let idade: number | string;

idade = 12;
// idade = "12";

function imprimirID(id: number | string) {
  if (typeof id === "string") {
    // id.toUpperCase // com essa condição, o VSCode entende que id é String ou Number e passa a mostrar os métodos de cada tipo
    console.log("Id é String");
  } else {
    console.log("Id é number");
  }
}

imprimirID(idade);

/* --- Literal Types --- */

// Instanciando uma variável restringindo os seus possíveis valores
let regiaoLiteral: "sul" | "norte" | "nordeste" | "sudeste" | "centro-oeste";

// Novo tipo Regiao sendo criado
type Regiao = "sul" | "norte" | "nordeste" | "sudeste" | "centro-oeste";

//regiaoLiteral = "estados unidos"; // Type '"estados unidos"' is not assignable to type '"sul" | "norte" | "nordeste" | "sudeste" | "centro-oeste"'.
regiaoLiteral = "sul";

// Funcao com Literal Types escrito direto na funcao
function viajar(
  regiao: "sul" | "norte" | "nordeste" | "sudeste" | "centro-oeste",
) {
  console.log(`Estamos viajando para ${regiao.toUpperCase()}`);
}

// Funcao com Literal Types utilizando novo tipo definido (Regiao)
function viajarComNovoTipo(regiao: Regiao) {
  console.log(`Estamos viajando para ${regiao.toUpperCase()}`);
}

viajar("sudeste");
viajarComNovoTipo("centro-oeste");
