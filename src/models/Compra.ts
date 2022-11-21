export class Compra {
  constructor(
    public idCubo: number,
    public idPedido: number,
    public idUsuario: number,
    public fechaPedido: string
  ) {
    this.idCubo = idCubo;
    this.idPedido = idPedido;
    this.idUsuario = idUsuario;
    this.fechaPedido = fechaPedido;
  }
}
