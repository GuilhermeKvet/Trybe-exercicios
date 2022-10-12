import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthData: Date, enrollment: string, examsGrades: number[], worksGrades: number[]) {
    super(name, birthData);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = examsGrades;
    this._worksGrades = worksGrades;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres");
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error("A pessoa estudante deve possuir no máximo 4 notas de provas");
    }
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error("A pessoa estudante deve possuir no máximo 2 notas de trabalhos");
    }
    this._worksGrades = value;
  }

  sumGrades(): number {
    const newExamsGrades = [...this._examsGrades];
    const newWorksGrades = [...this._worksGrades];

    const totalExamsGrades = newExamsGrades.reduce((acc, grade) => acc + grade , 0);
    const totalWorksGrades = newWorksGrades.reduce((acc, grade) => acc + grade , 0); 

    return totalExamsGrades + totalWorksGrades;
  }

  sumAverageGrade(): number {
    const newExamsGrades = [...this._examsGrades];
    const newWorksGrades = [...this._worksGrades];
    
    const sumGrades = this.sumGrades();
    return sumGrades / (newExamsGrades.length + newWorksGrades.length);
  }

  generateEnrollment(): string {
    return `MATRICULA${this.birthData}${this.name}`;
  }
}