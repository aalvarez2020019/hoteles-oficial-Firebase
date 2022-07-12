import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HotelesService } from 'src/app/services/hoteles.service';
import { Hoteles } from 'src/app/models/hoteles.model';

import { Controles } from 'src/app/models/controles.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [ UsuariosService, HotelesService ]

})
export class UsuariosComponent implements OnInit {

  chartOptions = {
    responsive: true,
  };

  chartLabels:any = [];
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];

  chartLegend = true;
  chartPlugins = [];


  public controlModelGet: any = [];





  // importaciones rol usuario
  public usuariosModelGet: Usuarios;
  public usuariosModelGetId: Usuarios;

  // importaciones rol admin hotel
  public usuariosGetHotel: Usuarios;
  public usuariosModelPost: Usuarios;
  public hotelesModelPost: Hoteles;

  // importaciones control
  public nuevoControlGet: Controles;
  public controlModelPost: Controles;
  public controlModelGetId: Controles;



  public token;



  constructor(
    public _usuarioService: UsuariosService,
    public _hotelesService: HotelesService ) {

    // Usuarios
    this.usuariosModelPost = new Usuarios('', '', '', '', '', '', '');
    this.usuariosModelGetId = new Usuarios('', '', '', '', '', '', '');

    // Hoteles
    this.hotelesModelPost = new Hoteles('', '', '', '', '', '', '');

    // controles
    this.controlModelPost = new Controles('', '', 0, '');
    this.controlModelGetId = new Controles('', '', 0, '');

    // Eventos


    this.token = this._usuarioService.obtenerToken();

  }


  refrescarPagina(){
    location.reload();
  }

  // ver Controles
  getControles(){
    this._hotelesService.obtenerControles(this._hotelesService.obtenerToken()).subscribe(

     (response) => {

       this.nuevoControlGet = response.Usuario;
       console.log(this.nuevoControlGet);
     },

    )
   }

   // agregar controles
   postAgregarControles(){

    this._hotelesService.agregarControles(this.controlModelPost, this._hotelesService.obtenerToken()).subscribe(

      (response)=>{

        console.log(response);
        this.getControles();

      (error)=>{
        console.log(error)

      }


    }
  )
  }

  // obtener por id est
  getControlId(idControl){

    this._hotelesService.obtenerControlesId(idControl, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.controlModelGetId = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }


  // editar controles
  putControles(){
    this._hotelesService.editarControl(this.controlModelGetId, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.getControles();

      },


    )
  }


  // eliminar controles
  eliminarControles(id){
    this._hotelesService.eliminarControles(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getControles();

      },
      (error)=>{
        console.log(error)

    }
    )
  }



  // agregar hoteles
    HotelAgregar(){
    this._hotelesService.agregarHotel(this.hotelesModelPost, this._hotelesService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);

      (error)=>{
        console.log(error)

      }


    }
  )
  }



  // buscar rol_usuario
  getUsuarios(){
    this._usuarioService.obtenerUsuarios(this._usuarioService.obtenerToken()).subscribe(

     (response) => {
       this.usuariosModelGet = response.Usuarios;
       console.log(this.usuariosModelGet);
     },


    )
   }

   // buscar usuarios admin hotel
   getUsuariosAdminHotel(){
    this._usuarioService.obtenerUsuariosAdminHotel(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.usuariosGetHotel = response.AdminApp;
       console.log(this.usuariosGetHotel);
     },


    )
   }

   // Agregar admin hotel
   postAdminAgregar(){
    this._usuarioService.agregarAdminHotel(this.usuariosModelPost, this._usuarioService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);
        this.getUsuariosAdminHotel();

      (error)=>{
        console.log(error)

      }


    }
  )
  }

  // Buscar por el id
  getUsuariosId(idUsuario){

    this._usuarioService.obtenerUsuariosId(idUsuario, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.usuariosModelGetId = response.AdminApp;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  // Editar usuarios
  putUsuarios(){
    this._usuarioService.editarUsuarios(this.usuariosModelGetId, this.token).subscribe(
      (response)=>{

        console.log(response);

        this.getUsuarios();


      },


    )
  }

  // Obtener id admin hotel
  getUsuariosIdAdminHotel(idUsuario){

    this._usuarioService.obtenerIdAdminHotel(idUsuario, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.usuariosModelGetId = response.AdminApp;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  // editar rol admin hotel
  putRolAdminHotel(){
    this._usuarioService.editarRolAdminHotel(this.usuariosModelGetId, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.getUsuariosAdminHotel();


      },


    )
  }

  // eliminar usuarios
  eliminarUsuarios(id){
    this._usuarioService.eliminarUsuarios(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getUsuarios();


      },
      (error)=>{
        console.log(error)

    }
    )
  }

  hotelAdminEliminar(id){
    this._usuarioService.eliminarAdminHotel(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getUsuariosAdminHotel();


      },
      (error)=>{
        console.log(error)

    }
    )
  }

  graficaHoteles(){

    this.chartData = [];
    this.chartLabels = []
    console.log(this.chartData);

    this._usuarioService.verControl(this.token).subscribe(

      (response)=>{

        this.controlModelGet = response.Usuario;
        this.controlModelGet.forEach(datos => {
          this.chartLabels.push(datos.nombreHotel);
          this.chartData.push(datos.cantidad);

          this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        })

        console.log(this.controlModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };





  ngOnInit(): void {

    this.getUsuarios();
    this.getUsuariosAdminHotel();
    this.graficaHoteles();
    this.getControles();
  }

}
