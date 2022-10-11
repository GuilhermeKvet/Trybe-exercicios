import Cliente from "./Cliente";
import ItemDoPedido from "./ItemDoPedido";

export default class Pedido {
  private _cliente: Cliente;
  private _itensDoPedido: ItemDoPedido[] = [];
  private _pagamento: string;
  private _desconto: number;

  constructor(
    cliente: Cliente,
    itensDoPedido: ItemDoPedido[],
    pagamento: string,
    desconto: number
  ) {
    this._cliente = cliente;
    this._itensDoPedido = itensDoPedido;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get client(): Cliente {
    return this._cliente;
  }

  set client(value: Cliente) {
    this._cliente = value;
  }

  get items(): ItemDoPedido[] {
    return this._itensDoPedido;
  }

  set items(value: ItemDoPedido[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._itensDoPedido = value;
  }

  get modoDePagamento(): string {
    return this._pagamento;
  }

  set modoDePagamento(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  totalSemDesconto(): number {
    const total = this.items.reduce((acc, pedido) => acc + pedido.preco, 0)
    return total;
  }

  totalComDesconto(): number {
    const totalSemDesconto = this.totalSemDesconto();
    return totalSemDesconto * (1 - this.desconto);
  }
}