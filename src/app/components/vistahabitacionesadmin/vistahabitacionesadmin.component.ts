import { Component, OnInit } from '@angular/core';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-vistahabitacionesadmin',
  templateUrl: './vistahabitacionesadmin.component.html',
  styleUrls: ['./vistahabitacionesadmin.component.scss'],
  providers: [UsuariosService]
})
export class VistahabitacionesadminComponent implements OnInit {
  
  public habitacionesModelGet: Habitaciones;
  public token;
  public habitacionesModelGetId: Habitaciones;

  constructor(
    public _usuariosService: UsuariosService,
    public _activatedRoute: ActivatedRoute,

  ) {

    this.habitacionesModelGetId = new Habitaciones('', '', '', '', 0, '', 0, 0, 0, '', '');

    this.token = this._usuariosService.obtenerToken();

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));

      this.getHabitacionesId(dataRuta.get('idHotel'));

      // this.getHotelesTodos();

    })
  }

  // get habitaciones
  getHabitacionesId(idHab){

    this._usuariosService.HabitacionesUsuario(idHab, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.habitacionesModelGet = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  habitacionId(idHotel){

    this._usuariosService.obtenerIdHab(idHotel, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.habitacionesModelGetId = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

}
