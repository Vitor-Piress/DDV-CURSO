import { Book } from "./book.js";
// import { User } from "./user.js";

export enum BookStatus {
  AVAILABLE = "AVAILABLE",
  CHECKEDOUT = "CHECKED OUT",
  UNAVAILABLE = "UNAVAILABLE",
  DELAYED = "DELAYED",
}

export class Lending {
  public readonly id: number;
  public readonly idBook: number;
  public readonly idUser: number;
  public dateCheckedOut: Date;
  public dateReturn: Date;
  public status: BookStatus;

  constructor(
    id: number,
    idBook: number,
    idUser: number,
    daysToReturn: number = 7,
  ) {
    this.id = id;
    this.idBook = idBook;
    this.idUser = idUser;

    this.dateCheckedOut = new Date();
    this.status = BookStatus.CHECKEDOUT;

    const dateReturn = new Date();
    dateReturn.setDate(dateReturn.getDate() + daysToReturn);
    this.dateReturn = dateReturn;
  }

  public finalizarEmprestimo(): void {
    this.status = BookStatus.AVAILABLE;
  }
}
