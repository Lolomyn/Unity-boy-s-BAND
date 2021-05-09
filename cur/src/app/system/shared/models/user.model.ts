export class User {
  constructor(
    public login: string,
    public password: string,
    public name: string,
    public type: string,
    public id?: number
  ) {}
}
