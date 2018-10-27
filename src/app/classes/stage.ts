import { Material } from './material'
import { Invoice } from './invoice'
export class Stage {
  constructor(
    public id: number,
    public id_project: number,
    public name: string,
    public description: string,
    public status: boolean,
    public start_date: Date,
    public end_date: Date,
    public materials:Material[],
    public invoices:Invoice[],
    public totalBudget:number,
    public totalCost:number
  ) { }
}
