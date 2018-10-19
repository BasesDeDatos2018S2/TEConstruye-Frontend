import { Client } from './client'
export class Project {
  constructor(
   public id: number,
   public name: string,
   public location: string,
   public id_client: string,
   public id_manager: string,
 ) {  }
}
