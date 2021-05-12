export class User {
  public id?: number
  constructor(
    public login: string,
    public password: string,
    public name: string,
    public type: string,
  ) {}
}
