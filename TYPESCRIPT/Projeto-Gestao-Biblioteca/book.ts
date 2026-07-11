export enum BookStatus {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}
export class Book {
  public readonly id: number;
  public title: string;
  public author: string;
  public status: BookStatus;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.status = BookStatus.AVAILABLE;
  }
}

// teste function() blablabla
