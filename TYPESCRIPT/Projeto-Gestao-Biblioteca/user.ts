import { Book } from "./book.js";

export class User {
  public readonly id: number;
  public name: string;
  public booksHistory: Book[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
