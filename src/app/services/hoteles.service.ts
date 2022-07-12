import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hoteles } from '../models/hoteles.model';
import { Controles } from '../models/controles.model';

@Injectable({
  providedIn: 'root'
})

export class HotelesService {

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

  obtenerHoteles(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verHoteles', { headers: headersToken});
  }

  // Obtener Hoteles por el id
  obtenerHotelesAdmin(idHotel, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerHotelesAdmin/' + idHotel, { headers: headersToken});

  }

  // agregar hoteles
  agregarHotel(modeloAdmin: Hoteles, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloAdmin);

    return this._http.post(this.url + '/registrarHotel', parametros, {headers: headersToken});

  }

  // obtener Id Hotel
  ObtenerIdHotel(idHotel, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/hotelesAdmin/' + idHotel, { headers: headersToken});

  }

  // agregar hoteles Nuevo


  // editar hoteles
  editarHoteles(modeloHoteles: Hoteles, token): Observable<any> {

    let parametros = JSON.stringify(modeloHoteles);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarHotel/' + modeloHoteles._id, parametros, { headers: headersToken })

  }


  // eliminar hoteles
  eliminarHoteles( idUsuario, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarHotel/' +  idUsuario, { headers: headersToken});

  }

  // obtener Hoteles Todos
  obtenerHotelesTodos(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerHotelesTodos', { headers: headersToken});

  }

  // obtener los controles
  obtenerControles(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verControlNuevo', { headers: headersToken});

  }

  // agregar controles
  agregarControles(modeloControl: Controles, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloControl);

    return this._http.post(this.url + '/registrarControl', parametros, {headers: headersToken});

  }

  // editar controladores
  editarControl(modeloControlador: Controles, token): Observable<any> {

    let parametros = JSON.stringify(modeloControlador);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarControles/' + modeloControlador._id, parametros, { headers: headersToken })

  }

  // obtener por id

 obtenerControlesId(idControl, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.get(this.url + '/idControlador/' + idControl, { headers: headersToken})

}


// eliminar controles

eliminarControles( idControl, token ): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.delete(this.url + '/eliminarControl/' +  idControl, { headers: headersToken});

}


}
