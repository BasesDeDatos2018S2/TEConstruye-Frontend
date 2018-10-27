export class Project {
  constructor(
   public id: number,
   public name: string,
   public ubication: string,
   public id_client: string,
   public manager: string,
   public totalCost: number,
   public totalBudget: number,
   public idStages: number[],
   public idAnotations: number[]
 ) {  }
}
