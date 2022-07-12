import { Component, OnInit } from '@angular/core';
import { Hoteles } from 'src/app/models/hoteles.model';
import { Servicios } from 'src/app/models/servicios.model';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from 'src/app/models/eventos.model';
import { Reservaciones } from 'src/app/models/reservaciones.model';
import { Factura } from 'src/app/models/factura.model';
import { Usuarios } from 'src/app/models/usuario.model';


// importacion services hoteles
import { AdminhotelesService } from 'src/app/services/adminhoteles.service';


// importacion services de servicios
import { ServiciosService } from 'src/app/services/servicios.service';

// importacion services habitaciones
import { HabitacionesService } from 'src/app/services/habitaciones.service';

// importacion services eventos
import { EventosService } from 'src/app/services/eventos.service';



@Component({
  selector: 'app-vista-admin-hotel',
  templateUrl: './vista-admin-hotel.component.html',
  styleUrls: ['./vista-admin-hotel.component.scss'],
  providers: [AdminhotelesService,
    ServiciosService,
    HabitacionesService,
    EventosService
  ]

})
export class VistaAdminHotelComponent implements OnInit {

  // hoteles
  public hotelesModelGet: Hoteles;
  public hotelesModelGetId: Hoteles;

  // servicios
  public serviciosModelGet: Servicios;
  public serviciosModelPost: Servicios;
  public serviciosModelGetId: Servicios;

  // habitaciones
  public habitacionesModelGet: Habitaciones;
  public habitacionesModelPost: Habitaciones;
  public habitacionesModelGetId: Habitaciones;

  // eventos
  public eventosModelGet: Eventos;
  public eventosModelPost: Eventos;
  public eventosModelGetId: Eventos;

  // usuarios
  public usuariosModelGet: Usuarios;

  public buscar;

  public buscardos;


  // Reservaciones y factura
  public reservacionesModelGet: Reservaciones;
  public facturaModel: Factura;

  public token;


  constructor(
    public _hotelesService: AdminhotelesService,
    public _serviciosService: ServiciosService,
    public _habitacionesService: HabitacionesService,
    public _eventosService: EventosService

  ) {

    // hoteles
    this.hotelesModelGetId = new Hoteles('', '', '', '', '', '', '');


    // servicios
    this.serviciosModelPost = new Servicios('', '', '', '', '');
    this.serviciosModelGetId = new Servicios('', '', '', '', '');

    // habitaciones
    this.habitacionesModelPost = new Habitaciones('', '', '', '', 0, '', 0, 0, 0, '', '');
    this.habitacionesModelGetId = new Habitaciones('', '', '', '', 0, '', 0, 0, 0, '', '');

    // eventos
    this.eventosModelPost = new Eventos('', '', '', '', '');
    this.eventosModelGetId = new Eventos('', '', '', '', '');


    // factura
    this.facturaModel = new Factura('', '', '', '', '', '', '', '', '', '');


    this.token = this._hotelesService.obtenerToken();
   }


   // buscar rol_usuario
    getRolUsuario(){
    this._hotelesService.usuariosRolAdmin(this._hotelesService.obtenerToken()).subscribe(

     (response) => {

       this.usuariosModelGet = response.Usuario;

       console.log(this.usuariosModelGet);
     },

    )
   }


// buscar rol_usuario
  getHoteles(){
  this._hotelesService.hotelesAdmin(this._hotelesService.obtenerToken()).subscribe(

   (response) => {
     this.hotelesModelGet = response.AdminApp;
     console.log(this.hotelesModelGet);
   },


  )
 }

 // GET ID HOTEL
 getHotelesPorId(idHotel){

  this._hotelesService.verIdHotel(idHotel, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.hotelesModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}


 // obtener servicios

  getServicios(){
    this._serviciosService.obtenerServicios(this._serviciosService.obtenerToken()).subscribe(

      (response) => {

        this.serviciosModelGet = response.Usuario;

        console.log(this.serviciosModelGet);
      },


     )
  }

// agregar servicios
 postAgregarServicios(){
  this._serviciosService.agregarServicios(this.serviciosModelPost, this._serviciosService.obtenerToken()).subscribe(

    (response)=>{
      console.log(response);
      this.getServicios();

    (error)=>{
      console.log(error)

    }


  }
)
}

// get servicios id
getServiciosId(idServicio){

  this._serviciosService.obtenerServiciosId(idServicio, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.serviciosModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}


// editar servicios
putServicios(){

  this._serviciosService.serviciosEditar(this.serviciosModelGetId, this.token).subscribe(

    (response) =>{
      console.log(response);
      this.getServicios();
      }
    )

}


 // eliminar servicios
 serviciosEliminar(idServicio){
  this._serviciosService.serviciosEliminar(idServicio, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getServicios();


    },
    (error)=>{
      console.log(error)

  }
  )
}


// get habitaciones
getHabitaciones(){
  this._habitacionesService.obtenerHabitaciones(this._habitacionesService.obtenerToken()).subscribe(

    (response) => {

      this.habitacionesModelGet = response.Usuario;

      console.log(this.habitacionesModelGet);
    },


   )
}


// get habitaciones id
getHabId(idHab){

  this._habitacionesService.obtenerHabitacionesId(idHab, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.habitacionesModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}

// agregar servicios
postAgregarhabitaciones(){
  this._habitacionesService.agregarHabitaciones(this.habitacionesModelPost, this._habitacionesService.obtenerToken()).subscribe(

    (response)=>{
      console.log(response);
      this.getHabitaciones();

    (error)=>{
      console.log(error)

    }


  }
)
}

// editar habitaciones
putHabitacion(){

  this._habitacionesService.habitacionesEditar(this.habitacionesModelGetId, this.token).subscribe(

    (response) =>{
      console.log(response);
      this.getHabitaciones();
      }
    )

}


 // eliminar habitacion
 eliminarHabitacion(id){
  this._habitacionesService.habitacionesEliminar(id, this.token).subscribe(

    (response)=>{
      console.log(response);
      this.getHabitaciones();


    },
    (error)=>{
      console.log(error)

  }
  )
}


// ver eventos
getEventos(){
  this._eventosService.obtenerEventos(this._eventosService.obtenerToken()).subscribe(

    (response) => {

      this.eventosModelGet = response.Usuario;

      console.log(this.eventosModelGet);
    },


   )
}


// agregar eventos

postAgregarEventos(){

  this._eventosService.agregarEventos(this.eventosModelPost, this._eventosService.obtenerToken()).subscribe(

    (response)=>{

      console.log(response);
      this.getEventos();

    (error)=>{
      console.log(error)

    }


  }
)
}


// ver reservaciones
getReservaciones(){
  this._habitacionesService.obtenerReservaciones(this._habitacionesService.obtenerToken()).subscribe(

    (response) => {

      this.reservacionesModelGet = response.Usuario;

      console.log(this.reservacionesModelGet);
    },


   )
}

factura(id) {
  this._habitacionesService.factura(this.facturaModel, id).subscribe((response) => {

      console.log(response);

    });
}

// get servicios id
obtenerEventosId(idEvento){

  this._eventosService.obtenerEventosId(idEvento, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.eventosModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}

editarEventos(){

  this._eventosService.eventosEditar(this.eventosModelGetId, this.token).subscribe(

    (response) =>{
      console.log(response);
      this.getEventos()
      }
    )

  }

  // eliminar usuarios
  eventosEliminar(idEvento){
    this._eventosService.eventosEliminar(idEvento, this.token).subscribe(

      (response)=>{

        console.log(response);
        this.getEventos();


      },
      (error)=>{
        console.log(error)

    }
    )
  }




  ngOnInit(): void {
    this.getHoteles();
    this.getServicios();
    this.getHabitaciones();
    this.getEventos();
    this.getReservaciones();
    this.getRolUsuario();
  }

}
