import Person from "./Person";
import Subject from "./Subject";
import Employee from "./Employee";

export default class Professor extends Person implements Employee {
  subject: Subject;
  registration: string;
  admissionDate: Date;
  salary: number;

  constructor(name: string, birthData: Date, private _salary: number, subject: Subject) {
    super(name, birthData);

    this.subject = subject;
    this.salary = _salary;
    this.admissionDate = new Date();
    this.registration = this.generateRegistration();
  }
  
  generateRegistration(): string {
    return `REGISTER ${this.registration}${this.admissionDate}`
  }
}