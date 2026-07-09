/* --- Type --- */
// Type funciona como um alias; Trazendo apenas um apelido para a tipagem que está sendo definida (atalho/apelido)
type Regiao = "sul" | "norte" | "nordeste" | "sudeste" | "centro-oeste";

type Nome = string | number;

type PessoaType = {
  nome: string;
  idade: number;
};

type AdminType = PessoaType & {
  permissoes: string[];
};

let UserType: AdminType = {
  nome: "VitorADM Type",
  idade: 12,
  permissoes: ["Excluir", "Visualizar"],
};

/* --- Interface --- */
// Sempre utilizar interface quando se tratar de Objetos
interface Pessoa {
  nome: string;
  idade: number;
}

interface Admin extends Pessoa {
  permissoes: string[];
}

let User: Admin = {
  nome: "VitorADM Interface",
  idade: 12,
  permissoes: ["Salvar", "Excluir", "Deletar"],
};
