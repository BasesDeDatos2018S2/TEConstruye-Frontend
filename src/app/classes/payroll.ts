export class Payroll {
  constructor(
    public id: number,
    public project: number,
    public hours: number,
    public employee: number,
    public date: Date,
  ) { }
}
