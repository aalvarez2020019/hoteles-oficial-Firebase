import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Habitaciones } from '../models/habitaciones.model';
import { Factura } from '../models/factura.model';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

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

  // obtener servicios
  obtenerHabitaciones(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerHabitaciones', { headers: headersToken});
  }


  // agregar habitaciones
  agregarHabitaciones(modeloHab: Habitaciones, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloHab);

    return this._http.post(this.url + '/registrarHabitaciones', parametros, {headers: headersToken});

  }





  // editar habitaciones
 habitacionesEditar(modeloHab: Habitaciones, token): Observable<any> {

  let parametros = JSON.stringify(modeloHab);

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.put(this.url + '/editarHabitaciones/' + modeloHab._id, parametros, { headers: headersToken })

}




    // habitaciones por id

  obtenerHabitacionesId(idHab, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.get(this.url + '/obtenerIdHabitacionnn/' + idHab, { headers: headersToken})

}

  // eliminar hab
  habitacionesEliminar( idHab, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarHabitaciones/' +  idHab, { headers: headersToken});

  }








   // obtener reservaciones
   obtenerReservaciones(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verReservaciones', { headers: headersToken});

  }



  // factura
  factura(reservaciones: Factura, id): Observable<any> {

    let params = JSON.stringify(reservaciones);

    return this._http.post(this.url + '/factura/' + id, params, {headers: this.headersToken,});
  }

}
