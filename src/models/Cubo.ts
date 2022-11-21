export class Cubo {

    constructor(
        public idCubo: number,
        public nombre: string,
        public modelo: string,
        public marca: string,
        public color: string,
        public imagen: string,
        public precio: number,
        public valoracion: number
    ){
        this.idCubo = idCubo;
        this.nombre = nombre;
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.imagen = imagen;
        this.precio = precio;
        this.valoracion = valoracion;
    }
}