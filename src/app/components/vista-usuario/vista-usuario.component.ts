import { Component, OnInit } from '@angular/core';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Reservaciones } from 'src/app/models/reservaciones.model';
import { RolusuarioService } from 'src/app/services/rolusuario.service';
import { Hoteles } from 'src/app/models/hoteles.model';
import { Usuarios } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.scss'],
  providers: [RolusuarioService]
})
export class VistaUsuarioComponent implements OnInit {

  public habitacionesModelGet: Habitaciones;
  public habitacionesModelGetId: Habitaciones;
  public hotelesModelGet: Hoteles;
  public hotelesModelGetId: Hoteles;

  public habitacionesOcupadas: Habitaciones;


  public token;
  public buscar;



  public reservaModel: Reservaciones;

  // ver a los usuarios

  public usuariosModelGet: Usuarios;
  public usuariosModelGetId: Usuarios;


  constructor(
    public _reservacionService: RolusuarioService,

  ) {
    this.token = this._reservacionService.obtenerToken();
    this.reservaModel = new Reservaciones('', '', '', '', '');
    this.habitacionesModelGetId = new Habitaciones('', '', '', '', 0, '', 0, 0, 0, '', '');
    this.hotelesModelGetId = new Hoteles('', '', '', '', '', '', '');

    this.usuariosModelGetId = new Usuarios('', '', '', '', '', '', '');


   }

  ngOnInit(): void {
    this.getHabitaciones();
    this.getHoteles();
    this.verhabitacionesOcupadas();
    this.obtenerUsuarios();
  }


  // refrescar
  refrescarPagina(){
    location.reload();
  }

  
  // eliminar habitaciones
  eliminarHabitacion(id){
    this._reservacionService.habitacionEliminar(id, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.verhabitacionesOcupadas();

      },
      (error)=>{
        console.log(error)

    }
    )
  }






  // obtener servicios

  obtenerUsuarios(){
    this._reservacionService.obtenerUsuarioRol(this._reservacionService.obtenerToken()).subscribe(

      (response) => {

        this.usuariosModelGet = response.Usuario;

        console.log(this.usuariosModelGet);

      },
     )
  }

  // obtener id usuarios
  getUsuariosId(idUser){

    this._reservacionService.usuarioIdGet(idUser, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.usuariosModelGetId = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }


  // ver habitaciones
  verhabitacionesOcupadas(){
    this._reservacionService.verHabitacionesOcupadas(this._reservacionService.obtenerToken()).subscribe(

      (response) => {

        this.habitacionesOcupadas = response.Usuario;

        console.log(this.habitacionesOcupadas);
      },

     )
  }


  // obtener servicios

  getHabitaciones(){
    this._reservacionService.verHabitaciones(this._reservacionService.obtenerToken()).subscribe(

      (response) => {

        this.habitacionesModelGet = response.Usuario;

        console.log(this.habitacionesModelGet);
      },


     )
  }

  getHoteles(){
    this._reservacionService.verHoteles(this._reservacionService.obtenerToken()).subscribe(

      (response) => {

        this.hotelesModelGet = response.Usuario;

        console.log(this.hotelesModelGet);
      },


     )
  }



  reservar(id) {
    this._reservacionService.reservar(this.reservaModel, id).subscribe((response) => {

        console.log(response);
        this.getHabitaciones();

      });
  }

  getHabitacionesId(idHab){

    this._reservacionService.obtenerIdHabitacion(idHab, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.habitacionesModelGetId = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  getHotelesId(idHotel){

    this._reservacionService.verIdHotel(idHotel, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.hotelesModelGetId = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }


  putUsuarios(){
    this._reservacionService.editarCostoHabitación(this.habitacionesModelGetId, this.token).subscribe(

      (response)=>{

        console.log(response);

        this.getHabitaciones();


      },


    )
  }









}
