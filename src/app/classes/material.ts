export class Material {
  constructor(
    public id: number,
    public name: string,
    public detail: string,
    public price: number,
    public quantity: number = 0
  ) { }
}
// TODO: cambiar tipo dato del precio
