import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hoteles } from '../models/hoteles.model';


@Injectable({
  providedIn: 'root'
})
export class AdminhotelesService {


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

  hotelesAdmin(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verHotelesDelAdmin', { headers: headersToken});

  }

  // obtener id hotel ADMIN_HOTEL
  verIdHotel(idHotel, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verIdHotel/' + idHotel, { headers: headersToken});

  }

  // ver usuarios ROL_ADMIN
  usuariosRolAdmin(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/rolUsuarioGet', { headers: headersToken});

  }

  // obtener eventos ADMIN_HOTEL
  getFacturaHabitacion(idHab, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/getFactura/' + idHab, { headers: headersToken});

  }

  // eliminar factura
  eliminarFactura( idHab, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarFactura/' +  idHab, { headers: headersToken});

  }







}
