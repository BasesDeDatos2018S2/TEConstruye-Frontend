import { Material } from './material'
import { Invoice } from './invoice'
export class Stage {
  constructor(
    public id: number,
    public id_project: number,
    public name: string,
    public description: string,
    public state: boolean,
    public start_date: Date,
    public due_date: Date,
    public materials:Material[],
    public invoices:Invoice[]
  ) { }
}
