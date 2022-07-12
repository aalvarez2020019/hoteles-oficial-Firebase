import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios.model';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from 'src/app/models/eventos.model';

@Component({
  selector: 'app-vermodaladminhotel',
  templateUrl: './vermodaladminhotel.component.html',
  styleUrls: ['./vermodaladminhotel.component.scss'],
  providers: [ServiciosService]
})
export class VermodaladminhotelComponent implements OnInit {

  public serviciosModelGet: Servicios;
  public habitacionesModelGet: Habitaciones;
  public eventosModelGet: Eventos;
  public token;

  constructor(
    public _serviciosService: ServiciosService,
    public _activatedRoute: ActivatedRoute,
  ) {
    this.token = this._serviciosService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));

      this.getServiciosAdmin(dataRuta.get('idHotel'));
      this.getHabitacionesAdmin(dataRuta.get('idHotel'));
      this.getEventosAdmin(dataRuta.get('idHotel'));

      // this.getHotelesTodos();

    })
  }

  // ver servicios id admin hotel
  getServiciosAdmin(idHotel){
    this._serviciosService.ServiciosAdminHotel(idHotel, this.token).subscribe(

      (response)=>{
        this.serviciosModelGet = response.Usuario;

        console.log(this.serviciosModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  // ver habitaciones id admin hotel
  getHabitacionesAdmin(idHotel){
    this._serviciosService.HabitacionesAdminHotel(idHotel, this.token).subscribe(

      (response)=>{
        this.habitacionesModelGet = response.Usuario;

        console.log(this.habitacionesModelGet);

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  // ver eventos admin
  getEventosAdmin(idHotel){
    this._serviciosService.EventosAdminHotel(idHotel, this.token).subscribe(

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
