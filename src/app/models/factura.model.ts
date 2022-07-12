export class Factura {
  constructor(

    public _id: String,
    public usuario: String,
    public reservacion: String,
    public fechaInicio: String,
    public fechaFin: String,
    public servicioHotel: String,
    public habitacion: String,
    public noNit: String,
    public total: String,
    public servicios: String

  ){}
}
