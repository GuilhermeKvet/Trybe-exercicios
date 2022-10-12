export default class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    const data = `${dia}-${mes}-${ano}`;
    if (new Date(data).getDate() !== dia) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  get dia() {
   return this._dia; 
  }

  set dia(value: number) {
    this._dia = value;
  }

  get mes() {
    return this._mes; 
  }

  set mes(value: number) {
    this._mes = value;
  }

  get ano() {
    return this._ano; 
  }

  set ano(value: number) {
    this._ano = value;
  }

  getMonthName(): string {
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return meses[this._mes - 1];
  }

  isLeapYear(): boolean {
    return this._ano % 4 === 0;
  }

  compare(date: Data): number {
    const dataAtual = `${this.ano}-${this.mes}-${this.dia}`;

    const data = `${date.ano}-${date.mes}-${date.dia}`;

    if (new Date(dataAtual) > new Date(data)) return 1;
    if (new Date(dataAtual) < new Date(data)) return -1;
    return 0;
  }

  format(formato: string): string {
    const conditions: boolean[] = [
      (!formato.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formato.match(/m{2}/g) && !formato.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formato.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formato}`);
    }

    const dia = this.dia > 9 ? this.dia.toString() : `0${this.dia.toString()}`;
    const mes = this.mes > 9 
      ? this.mes.toString() 
      : `0${this.mes.toString()}`;
    const ano = this.ano.toString();

    const dateformato = formato
      .replace('dd', dia).replace('mm', mes)
      .replace('M', this.getMonthName()).replace('aaaa', ano)
      .replace('aa', ano.substr(-2));

    return dateformato;
  }
}