/* library.ts */
import { Book, BookStatus } from "./book.js";
import { Lending, LendingStatus } from "./lending.js";
import { User } from "./user.js";

class Library {
  protected id: number;
  public name: string;
  public books: Book[] = [];
  public users: User[] = [];
  public lendings: Lending[] = [];

  private nextLibraryId = 1;
  private nextBookId = 1;
  private nextUserId = 1;
  private nextLendingId = 1;

  constructor(name: string) {
    this.id = this.nextLibraryId;
    this.name = name;

    this.nextLibraryId++;
    console.log(`* Livraria ${this.name} registrada com sucesso! *\n`);
  }

  // Generic Method restrito a objetos que possuam a propriedade 'id'
  private findById<T extends { id: number }>(
    list: T[] | undefined,
    searchId: number,
  ): T | undefined {
    if (list) {
      const idTrue = list.find((item) => item.id === searchId);
      if (idTrue) {
        return idTrue;
      } else {
        console.log(`ID ${searchId} não encontrado`);
      }
    } else {
      console.log(`Lista Vazia`);
    }
  }

  // Uso do Utility Type Omit para ocultar 'id' e 'booksHistory' na entrada
  public registerUSer(userData: Omit<User, "id" | "booksHistory">): void {
    const user = new User(this.nextUserId, userData.name);
    this.nextUserId++;

    this.users.push(user);
    console.log(
      `* Novo Usuário Registrado com Sucesso!\n* ID: ${user.id} - ${user.name} *\n`,
    );
    console.log("-----------------\n");
  }

  // Uso do Utility Type Omit para ocultar 'id' e 'status' na entrada
  public registerBook(bookData: Omit<Book, "id" | "status">): void {
    const book = new Book(this.nextBookId, bookData.title, bookData.author);
    this.nextBookId++;

    this.books.push(book);
    console.log(
      `* Novo Livro Registrado com Sucesso!\n* ID: ${book.id} - ${book.title} - Autor: ${book.author} - Status: ${book.status} *\n`,
    );
    console.log("-----------------\n");
  }

  public listBooks(): void {
    console.log(`*** Listando Livros da ${this.name} ***`);
    this.books.forEach((book) => {
      console.log(
        `\nId: ${book.id} - Livro: ${book.title}\nAuthor: ${book.author}\nSituação: ${book.status}`,
      );
    });
    console.log("\n----------------------------");
  }

  public listUsers(): void {
    console.log(`*** Listando Usuários da ${this.name} ***`);
    this.users.forEach((user) => {
      console.log(`* Id: ${user.id} - Nome: ${user.name}\n`);
      if (user.booksHistory.length === 0) {
        console.log(`Usuário ${user.name} não pegou nenhum livro ainda!\n`);
        return;
      }
      console.log(`* Livros já pegos pelo usuário ${user.name} *`);
      user.booksHistory.forEach((book) => {
        console.log(
          `Id: ${book.id} - Livro: ${book.title}\nAuthor: ${book.author}\nSituação atual: ${book.status}`,
        );
        console.log("\n----------------------------");
      });
    });
  }

  public listLendings(): void {
    console.log("RAIO-X DOS EMPRÉSTIMOS:", this.lendings);
  }

  public registerBookLending(idBook: number, idUser: number): void {
    const book = this.findById(this.books, idBook);
    const user = this.findById(this.users, idUser);

    if (!book) {
      console.log(`O ID de Livro ${idBook} não existe`);
      return;
    }
    if (book.status != BookStatus.AVAILABLE) {
      console.log(`O Livro ID ${idBook} já está emprestado!`);
      return;
    }
    if (!user) {
      console.log(`O ID de Usuário ${idUser} não existe`);
      return;
    }

    const lend = new Lending(this.nextLendingId, idBook, idUser);
    book.status = BookStatus.UNAVAILABLE;
    this.lendings.push(lend);
    user.booksHistory.push(book);
    console.log(
      `* Lending registrado com Sucesso! *\n ID: ${book.id} Livro: ${book.title} emprestado a ID: ${user.id} ${user.name}\n`,
    );

    this.nextLendingId++;
  }

  // Refatorado com Cláusulas de Guarda (Early Return) para evitar aninhamento excessivo
  public registerBookReturn(idBook: number, idUser: number): void {
    const user = this.findById(this.users, idUser);
    if (!user) {
      console.log(`Usuário ID ${idUser} não encontrado!`);
      return;
    }

    const book = this.findById(this.books, idBook);
    if (!book) {
      console.log(`Livro ID ${idBook} não encontrado!`);
      return;
    }

    const bookUser = this.findById(user.booksHistory, idBook);
    if (!bookUser) {
      console.log(
        `Livro ID ${idBook} não encontrado vinculado ao usuário ID ${idUser}!`,
      );
      return;
    }

    // Busca complexa de chave estrangeira validando o status do contrato
    const lend = this.lendings.find(
      (lend) =>
        lend.idBook === idBook &&
        lend.idUser === idUser &&
        lend.status === LendingStatus.CHECKEDOUT,
    );
    if (!lend) {
      console.log(
        `Empréstimo do Livro ID ${idBook} e Usuário ID ${idUser} não encontrado!`,
      );
      return;
    }

    lend.finalizarEmprestimo();
    book.status = BookStatus.AVAILABLE;
  }
}

// ==========================================
// TESTES DO SISTEMA
// ==========================================

console.log("*** Registrando a Livraria ***");
const library = new Library("Super Mega Blaster Ultra");

console.log("*** Registrando Users ***");
library.registerUSer({ name: "Vitor Pires" });
library.registerUSer({ name: "Isadora Palu" });

console.log("*** Registrando Livros ***");
library.registerBook({ title: "Harry Potter", author: "J. K. Rowling" });
library.registerBook({ title: "1984", author: "George Orwell" });
library.registerBook({
  title: "Uma História de Vida",
  author: "Vitor Pires",
});

library.listUsers();

console.log("*** Listando Books ***");
library.listBooks();

console.log("*** Registrando Lending ***");
library.registerBookLending(3, 1);
library.registerBookLending(2, 2);
library.listUsers();
library.listBooks();

console.log("*** Registrando Return ***");
library.registerBookReturn(3, 1);

console.log("*** Listando após Return 1/2 ***");
library.listUsers();
library.listBooks();

console.log("*** Listando após Return 2/2 ***");
library.registerBookReturn(2, 2);
library.listUsers();
library.listBooks();

// library.listLendings()
