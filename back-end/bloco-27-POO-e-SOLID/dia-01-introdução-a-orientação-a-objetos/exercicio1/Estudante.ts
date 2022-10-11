export default class Studant {
  matricula: string;
  nome: string;
  notaProva1: number;
  notaProva2: number;
  notaProva3: number;
  notaProva4: number;
  notaTrabalho1: number;
  notaTrabalho2: number;

  constructor(
  matricula: string,
  nome: string,
  notaProva1: number,
  notaProva2: number,
  notaProva3: number,
  notaProva4: number,
  notaTrabalho1: number,
  notaTrabalho2: number
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.notaProva1 = notaProva1;
    this.notaProva2 = notaProva2;
    this.notaProva3 = notaProva3;
    this.notaProva4 = notaProva4;
    this.notaTrabalho1 = notaTrabalho1;
    this.notaTrabalho2 = notaTrabalho2;
  }

  somaNotas() {
    return this.notaProva1
    + this.notaProva2
    + this.notaProva3
    + this.notaProva4
    + this.notaTrabalho1
    + this.notaTrabalho2;
  }

  mediaNotas() {
    const somaNotas = this.somaNotas();
    return somaNotas / 6;
  }
}