import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reservaciones } from '../models/reservaciones.model';
import { Habitaciones } from '../models/habitaciones.model';

@Injectable({
  providedIn: 'root'
})
export class RolusuarioService {

  public url: String = 'https://hotelesoficial.herokuapp.com/api';

    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    public headersToken = this.headersVariable.set('Authorization',this.obtenerToken());

    public token;

  constructor(public _http: HttpClient) { }

  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }

    return this.token;
  }

  verHabitaciones(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verHabitaciones', { headers: headersToken});
  }

  reservar(reservaciones: Reservaciones, id): Observable<any> {
    let params = JSON.stringify(reservaciones);
    return this._http.post(this.url + '/reservar/' + id, params, {headers: this.headersToken,});
  }

  // ver hoteles
  verHoteles(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerHoteles', { headers: headersToken});
  }

  // obtener Id Habitacion
  obtenerIdHabitacion(idHab, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerIdHabitacion/' + idHab, { headers: headersToken});

  }

  // obtener eventos USUARIOS
  HabitacionesUsuarios(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/verHabitaciones/' + idHotel, { headers: headersToken});

  }

  // obtener servicios USUARIOS
  ServiciosUsuarios(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/verServicios/' + idHotel, { headers: headersToken});

  }

  // obtener eventos USUARIOS
  eventosUsuarios(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/verEventosHotel/' + idHotel, { headers: headersToken});

  }

  // obtener Id hotel
  verIdHotel(idHotel, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/hotelesId/' + idHotel, { headers: headersToken});

  }

  // editar habitaciones

  editarCostoHabitación(modeloHab: Habitaciones, token): Observable<any> {

    let parametros = JSON.stringify(modeloHab);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarHabitacionesReserva/' + modeloHab._id, parametros, { headers: headersToken })

  }


  // ver habitaciones ocupadas
  verHabitacionesOcupadas(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/habitacionesOcupadas', { headers: headersToken});

  }


  // obtener Id hotel
  verIdFactura(idFactura, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/getReservacionesId/' + idFactura, { headers: headersToken});

  }

  // ver ROL_USUARIO
  obtenerUsuarioRol(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/getUsuarioAdmin', { headers: headersToken});

  }

  // obtener Id hotel
  usuarioIdGet(idUser, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/usuarioIdGet/' + idUser, { headers: headersToken});

  }

  // obtener reservaciones usuarios
  reservacionUser(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/getReservacionesId/' + idHotel, { headers: headersToken});

  }

  // eliminar reservaciones
  eliminarReservaciones( idUsuario, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarReservacion/' +  idUsuario, { headers: headersToken});

  }


  // eliminar habitaciones
  habitacionEliminar( idHabi, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/habiEliminar/' +  idHabi, { headers: headersToken});

  }






}
