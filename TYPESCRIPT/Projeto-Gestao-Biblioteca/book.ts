import { BookStatus } from "./lending.js";

export class Book {
  public readonly id: number;
  public bookName: string;
  public author: string;
  public status: BookStatus;

  constructor(id: number, bookName: string, author: string) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.status = BookStatus.AVAILABLE;
  }
}
