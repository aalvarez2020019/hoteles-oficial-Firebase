import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

    public url: String = 'https://hotelesoficial.herokuapp.com/api';
    
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    public identidad;
    public token;

    constructor(public _http: HttpClient) { }

    login(usuario, obtenerToken = null):Observable<any>{

      if(obtenerToken !=null){
          usuario.obtenerToken = obtenerToken;
      }

      let params = JSON.stringify(usuario);

      return this._http.post(this.url + '/login',params,{headers:this.headersVariable});

    }

    obtenerToken(){
      var token2 = localStorage.getItem("token");
      if(token2 !=undefined){
        this.token = token2;
      }else{
        this.token = null
      }

      return this.token;
    }

    obtenerIdentidad(){
      var identidad2=JSON.parse(localStorage.getItem('identidad'));
      if(identidad2!=undefined){
        this.identidad=identidad2;
      }else if(identidad2==undefined){
        this.identidad=null;
      }

      return this.identidad;
    }

    // registrar
    RegistrarUsuario(modeloUsuarios: Usuarios): Observable<any> {

      let parametros = JSON.stringify(modeloUsuarios);

      return this._http.post(this.url + '/registrarUsuarios', parametros, {headers: this.headersVariable});

    }

    // usuarios rol usuario
    obtenerUsuarios(token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerUsuarios', { headers: headersToken});
    }

    // usuarios admin hotel
    obtenerUsuariosAdminHotel(token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerUsuariosAdminHotel', { headers: headersToken});
    }

    // Agregar admin hotel
    agregarAdminHotel(modeloAdmin: Usuarios, token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token )

      let parametros = JSON.stringify(modeloAdmin);

      return this._http.post(this.url + '/agregarAdminHotel', parametros, {headers: headersToken});

    }

    // obtener por el id ROL_USUARIO
    obtenerUsuariosId(idUsuario, token): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerIdUsuario/' + idUsuario, { headers: headersToken})

    }

    // editar usuarios
    editarUsuarios(modeloUsuarios: Usuarios, token): Observable<any> {

      let parametros = JSON.stringify(modeloUsuarios);

      let headersToken = this.headersVariable.set('Authorization', token);

      return this._http.put(this.url + '/editarUsuarios/' + modeloUsuarios._id, parametros, { headers: headersToken })
    }

    // obtener por el id ROL_ADMIN_HOTEL
    obtenerIdAdminHotel(idUsuario, token): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerAdminHotel/' + idUsuario, { headers: headersToken});

    }

    // editar Rol Admin Hotel
    editarRolAdminHotel(modeloUsuarios: Usuarios, token): Observable<any> {

      let parametros = JSON.stringify(modeloUsuarios);

      let headersToken = this.headersVariable.set('Authorization', token);

      return this._http.put(this.url + '/editarRolAdminHotel/' + modeloUsuarios._id, parametros, { headers: headersToken })

    }

    // Eliminar Usuarios
    eliminarUsuarios( idUsuario, token ): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.delete(this.url + '/usuariosEliminar/' +  idUsuario, { headers: headersToken});

    }

    // Eliminar administradores de hoteles
    eliminarAdminHotel( idUsuario, token ): Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.delete(this.url + '/rolAdminHotelEliminar/' +  idUsuario, { headers: headersToken});

    }








    // control ver
  verControl(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verControles', { headers: headersToken});
  }

  // ver habitaciones del hotel rol Usuario
  HabitacionesUsuario(idHotel, token) : Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token )

  return this._http.get(this.url + '/obtenerHabiHotel/' + idHotel, { headers: headersToken});

  }

  // obtener por el id ROL_ADMIN_HOTEL
  obtenerIdHab(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerHabId/' + idUsuario, { headers: headersToken});

  }

  // obtener reservaciones por id
  verReservacionesHab(idReserv, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerReservaciones/' + idReserv, { headers: headersToken});

  }

   // obtener el id del usuario
   verIdUsuario(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/usuarioGetId/' + idUsuario, { headers: headersToken});

  }

  // editar usuarios
  usuariosEditarU(modeloUsuarios: Usuarios, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuarios);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/usuarioEditar/' + modeloUsuarios._id, parametros, { headers: headersToken })

  }

  // eliminar usuarios

  usuariosEliminar( idUsuario, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/usuarioEliminar/' +  idUsuario, { headers: headersToken});

  }

  // usuarios rol usuario
  usuariosVerTodos(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/usuariosVer', { headers: headersToken});
  }




}
