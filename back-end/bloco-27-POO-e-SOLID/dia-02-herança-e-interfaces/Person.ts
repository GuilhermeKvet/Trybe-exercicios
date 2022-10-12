export default class Person {
  private _name: string;
  private _birthData: Date;

  constructor(name: string, birthData: Date) {
    this._name = name;
    this._birthData = birthData;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve ter pelo menos 3 caracteres");
    }
    this._name = value;
  }

  get birthData() {
    return this._birthData;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  set birthData(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error("A data de nascimento não pode ser uma data no futuro");
    }
    if (Person.getAge(value) > 120) {
      throw new Error("A pessoa não pode possuir mais de 120 anos");
    }
    this._birthData = value;
  }
}