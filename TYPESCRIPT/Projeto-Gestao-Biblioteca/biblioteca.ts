import { Book } from "./book.js";
import { Lending } from "./lending.js";
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
  }

  public registerUSer(userName: string): void {
    const user = new User(this.nextUserId, userName);
    this.nextUserId++;

    this.users.push(user);
  }

  public registerBook(bookName: string, bookAuthor: string): void {
    const book = new Book(this.nextBookId, bookName, bookAuthor);
    this.nextBookId++;

    this.books.push(book);
  }

  public listBooks(): void {
    console.log(`\nListando Livros da ${library.name}:`);
    this.books.forEach((book) => {
      console.log(
        `\nId: ${book.id} - Livro: ${book.bookName}\nAuthor: ${book.author}\nSituação: ${book.status}`,
      );
    });
    console.log("\n----------------------------");
  }

  public listUsers(): void {
    console.log(`\nListando Usuários da ${library.name}:`);
    this.users.forEach((user) => {
      console.log(`\n* Id: ${user.id} - Nome: ${user.name}`);
      if (user.booksHistory.length !== 0) {
        console.log(`\nLivros já pegos pelo usuário ${user.name}`);
        user.booksHistory.forEach((book) => {
          console.log(
            `Id: ${book.id} - Livro: ${book.bookName}\nAuthor: ${book.author}\nSituação atual: ${book.status}`,
          );
        });
        console.log("\n----------------------------");
      } else {
        console.log(`Usuário ${user.name} não pegou nenhum livro ainda!`);
      }
    });
    console.log("\n----------------------------");
  }

  public registerBookLending(idBook: number, idUser: number): void {
    const book = this.books.find((book) => book.id === idBook);
    const user = this.users.find((user) => user.id === idUser);

    if (book) {
      if (user) {
        const lend = new Lending(this.nextLendingId, idBook, idUser);
        book.status = lend.status;
        this.lendings.push(lend);
        user.booksHistory.push(book);
        // console.log(lend);
      } else {
        console.log(`O ID de Usuário ${idUser} não existe`);
      }
    } else {
      console.log(`O ID de Livro ${idBook} não existe`);
    }
  }

  public registerBookReturn(idBook: number, idUser: number): void {
    const user = this.users.find((user) => user.id === idUser);
    if (user) {
      const book = user.booksHistory.find((book) => book.id === idBook);
      if (book) {
        const lend = this.lendings.find(
          (lend) => lend.idBook === idBook && lend.idUser === idUser,
        );
        if (lend) {
          lend.finalizarEmprestimo();
          book.status = lend.status;
          //   console.log(lend);
        }
      }
    }
  }
}

const library = new Library("LibraryTest01");

console.log("*** Registrando Users ***");
library.registerUSer("UsuarioTeste01");
library.registerUSer("UsuarioTeste02");

console.log("*** Registrando Livros ***");
library.registerBook("Harry Potter", "J.K. Rowling");
library.registerBook("1984", "George Orwell");

console.log("*** Listando Users ***");
library.listUsers();

console.log("*** Listando Books ***");
library.listBooks();

console.log("*** Registrando Lending ***");
library.registerBookLending(1, 1);
library.listUsers();
library.listBooks();

console.log("*** Registrando Return ***");
library.registerBookReturn(1, 1);
library.listUsers();
library.listBooks();
