import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Servicios } from '../models/servicios.model';
import { Habitaciones } from '../models/habitaciones.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public url: String = 'https://hotelesoficial.herokuapp.com/api';
  
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


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

  // obtener servicios ADMIN_HOTEL
  ServiciosAdminHotel(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerServiciosHotel/' + idHotel, { headers: headersToken});

  }


  // obtener habitaciones ADMIN_HOTEL
  HabitacionesAdminHotel(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerHabitacionesHotel/' + idHotel, { headers: headersToken});

  }

  // obtener eventos ADMIN_HOTEL
  EventosAdminHotel(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerEventosHotel/' + idHotel, { headers: headersToken});

  }

  // obtener servicios
  obtenerServicios(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerServicios', { headers: headersToken});
  }

  // agregar servicios
  agregarServicios(modeloServ: Servicios, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloServ);

    return this._http.post(this.url + '/registrarServicios', parametros, {headers: headersToken});

  }

  // obtener servicios id
  obtenerServiciosId(idServicio, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerIdServicio/' + idServicio, { headers: headersToken})

  }

  // editar servicios
  serviciosEditar(modeloServicios: Servicios, token): Observable<any> {

    let parametros = JSON.stringify(modeloServicios);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarServicio/' + modeloServicios._id, parametros, { headers: headersToken });

  }

  // Eliminar servicios

  serviciosEliminar( idServicio, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarServicio/' +  idServicio, { headers: headersToken});

  }




}
