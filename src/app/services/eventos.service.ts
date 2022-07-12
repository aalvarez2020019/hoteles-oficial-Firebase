import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos.model';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

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

  obtenerEventos(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerEventos', { headers: headersToken});

  }

    // agregar eventos
    agregarEventos(modeloHab: Eventos, token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token )

      let parametros = JSON.stringify(modeloHab);

      return this._http.post(this.url + '/registrarEventos', parametros, {headers: headersToken});

    }

     // editar usuarios
     eventosEditar(modeloEvento: Eventos, token): Observable<any> {

      let parametros = JSON.stringify(modeloEvento);

      let headersToken = this.headersVariable.set('Authorization', token);

      return this._http.put(this.url + '/editarEvento/' + modeloEvento._id, parametros, { headers: headersToken })
    }




    //Eliminar eventos

     eventosEliminar( idEvento, token ): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.delete(this.url + '/eliminarEvento/' +  idEvento, { headers: headersToken});

    }


    // obtener eventos id
    obtenerEventosId(idEvento, token): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerIdEvento/' + idEvento, { headers: headersToken})

    }




}
