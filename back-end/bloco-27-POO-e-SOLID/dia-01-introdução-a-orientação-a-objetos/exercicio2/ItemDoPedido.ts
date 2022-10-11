export default class ItemDoPedido {
  private _nomePedido: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nomePedido = nome;
    this._preco = preco;
  }

  get nome() {
    return this._nomePedido;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.')
    }
    this._nomePedido = value;
  }

  get preco() {
    return this._preco;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser positivo.');
    }

    this._preco = value;
  }
}
