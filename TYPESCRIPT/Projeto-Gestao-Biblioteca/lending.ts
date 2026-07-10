// import { Book } from "./book.js";
// import { User } from "./user.js";

export enum LendingStatus {
  CHECKEDOUT = "CHECKEDOUT",
  RETURNED = "RETURNED",
  DELAYED = "DELAYED",
}

export class Lending {
  public readonly id: number;
  public readonly idBook: number;
  public readonly idUser: number;
  public dateCheckedOut: Date;
  public dueDate: Date;
  public dateReturn?: Date;
  public status: LendingStatus;

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
    this.status = LendingStatus.CHECKEDOUT;

    const previewDueDate = new Date();
    previewDueDate.setDate(previewDueDate.getDate() + daysToReturn);
    this.dueDate = previewDueDate;
  }

  public finalizarEmprestimo(): void {
    this.status = LendingStatus.RETURNED;

    const dateReturn = new Date();
    this.dateReturn = dateReturn;
  }
}
