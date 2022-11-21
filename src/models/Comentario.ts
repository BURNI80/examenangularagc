export class Comentario {
  constructor(
    public idComentario: number,
    public idCubo: number,
    public idUsuario: number,
    public comentario: string,
    public fechaComentario: string
  ) {
    this.idComentario = idComentario;
    this.idCubo = idCubo;
    this.idUsuario = idUsuario;
    this.comentario = comentario;
    this.fechaComentario = fechaComentario;
  }
}
