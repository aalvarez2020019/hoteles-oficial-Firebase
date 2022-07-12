import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public url: String = 'https://hotelesoficial.herokuapp.com/api';
  
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');




  constructor(public _http: HttpClient) { }



  getHotelesTodos(): Observable<any> {


    return this._http.get(this.url + '/verhotelesGeneral', {headers: this.headersVariable});

  }

  // obtener hoteles id
  obtenerHotelesId(id: String): Observable<any> {


    return this._http.get(this.url + '/verHotelesId/' + id, { headers: this.headersVariable})

  }

  // obtener servicios id
    obtenerServiciosId(id: String): Observable<any> {


    return this._http.get(this.url + '/verServiciosTodos/' + id, { headers: this.headersVariable})

  }

  // obtener eventos id
  obtenerEventosId(id: String): Observable<any> {


    return this._http.get(this.url + '/verEventosTodos/' + id, { headers: this.headersVariable})

  }

  // obtener habitaciones id
  obtenerHabitacionesId(id: String): Observable<any> {


    return this._http.get(this.url + '/verhabitacionesGeneral/' + id, { headers: this.headersVariable})

  }


}
