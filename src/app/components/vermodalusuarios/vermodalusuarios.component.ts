import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios.model';
import { ActivatedRoute } from '@angular/router';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from 'src/app/models/eventos.model';
import { RolusuarioService } from 'src/app/services/rolusuario.service';

@Component({
  selector: 'app-vermodalusuarios',
  templateUrl: './vermodalusuarios.component.html',
  styleUrls: ['./vermodalusuarios.component.scss'],
  providers: [RolusuarioService]

})
export class VermodalusuariosComponent implements OnInit {

  public habitacionesModelGet: Habitaciones;
  public serviciosModelGet: Servicios;
  public eventosModelGet: Eventos;
  public token;


  constructor(
    public _rolUsuarioService: RolusuarioService,
    public _activatedRoute: ActivatedRoute,
  ) {
    this.token = this._rolUsuarioService.obtenerToken();

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));

      this.getHabitacionesUsuario(dataRuta.get('idHotel'));
      this.getServiciosUsuario(dataRuta.get('idHotel'));
      this.getEventosUsuario(dataRuta.get('idHotel'));

      // this.getHotelesTodos();

    })
  }

  getHabitacionesUsuario(idHab){
    this._rolUsuarioService.HabitacionesUsuarios(idHab, this.token).subscribe(

      (response)=>{
        this.habitacionesModelGet = response.Usuario;

        console.log(this.habitacionesModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  getServiciosUsuario(idHotel){
    this._rolUsuarioService.ServiciosUsuarios(idHotel, this.token).subscribe(

      (response)=>{
        this.serviciosModelGet = response.Usuario;

        console.log(this.serviciosModelGet)
      },

      (error)=>{
        console.log(<any>error);
      }
    )
  };

  getEventosUsuario(idHotel){
    this._rolUsuarioService.eventosUsuarios(idHotel, this.token).subscribe(

      (response)=>{
        this.eventosModelGet = response.Usuario;

        console.log(this.eventosModelGet);

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };



}
