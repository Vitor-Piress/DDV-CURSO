/* --- Utility Types --- */
// Partial
// Readonly
// Omit
// Pick
// Required

interface Usuario {
  nome: string;
  idade: number;
  faculdade: boolean;
}

interface UsuarioOpcional {
  nome?: string;
  idade?: number;
  faculdade?: boolean;
}

// Partial define todas as propriedades como opcionais
const pessoa01: Partial<Usuario> = {
  nome: "Jorge",
};

// Readonly faz com que todas as propriedades sejam somente para leitura, sendo definidas apenas na instanciação
const pessoa02: Readonly<Usuario> = {
  nome: "Jorge",
  idade: 12,
  faculdade: true,
};

// Omit solicita dois parâmetros, nesse caso o primeiro é a interface e o segundo é o que você deseja omitir; desconsiderar; deletar
const pessoa03: Omit<Usuario, "idade"> = {
  nome: "Jorge",
  //   idade: 12, Error: Object literal may only specify known properties, and 'idade' does not exist in type 'Omit<Usuario, "idade">'.
  faculdade: true,
};

// Pick solicita dois parâmetros, nesse caso o primeiro é a interface e o segundo é o que você deseja considerar; manter; utilizar
const pessoa04: Pick<Usuario, "idade" | "nome"> = {
  nome: "Jorge",
  idade: 12,
  //   faculdade: true, Error: Object literal may only specify known properties, and 'faculdade' does not exist in type 'Pick<Usuario, "nome" | "idade">'.
};

// Required define todas as propriedades como obrigatórias
const pessoa05: Required<UsuarioOpcional> = {
  nome: "Jorge",
  idade: 12,
  faculdade: false,
};
