export class  AddpatientModel {
  public id: number;
  constructor(
    public patientname: string,
    public cardid: number,
    public date: string,
    public age: number,
    public diagnosis: string
  ) {}
}

