
export class Usuarios{
  constructor(
      public _id: String,
      public nombreUsuario:String,
      public email: String,
      public password:String,
      public estado: String,
      public rol: String,
      public hotelHospedado: String

  ){}
}
