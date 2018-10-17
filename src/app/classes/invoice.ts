export class Invoice {
  constructor(
    public id: number,
    public date: Date,
    public serial: string,
    public price: number,
  ) { }
}
