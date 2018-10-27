export class Project {
  constructor(
   public id: number,
   public name: string,
   public location: string,
   public id_client: string,
   public id_manager: string,
   public date_start: string,
   public date_finish: string,
 ) {  }
}
