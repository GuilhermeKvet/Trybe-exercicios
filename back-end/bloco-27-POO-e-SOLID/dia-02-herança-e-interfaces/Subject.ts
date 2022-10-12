export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() { return this._name; }

  set name(value: string) { 
    if (value.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres");
    }
    this._name = value;
  }
}