export class Payroll {
  constructor(
    public id: number,
    public id_project: number,
    public hours: number,
    public id_employee: number,
    public date: Date,
  ) { }
}
