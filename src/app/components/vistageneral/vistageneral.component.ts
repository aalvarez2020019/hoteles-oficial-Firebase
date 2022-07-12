import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios.model';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from 'src/app/models/eventos.model';

@Component({
  selector: 'app-vistageneral',
  templateUrl: './vistageneral.component.html',
  styleUrls: ['./vistageneral.component.scss'],
  providers: [GeneralService]
})
export class VistageneralComponent implements OnInit {

  public serviciosModelGet: Servicios;
  public eventosModelGet: Eventos;
  public habitacionesModelGet: Habitaciones;


  constructor(
    public _generalService: GeneralService,
    public _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));

      this.getServiciosId(dataRuta.get('idHotel'));
      this.getHabitaciones(dataRuta.get('idHotel'));
      this.getEventosId(dataRuta.get('idHotel'));

      // this.getHotelesTodos();

    })
  }

  // ver servicios
  getServiciosId(id){

    this._generalService.obtenerServiciosId(id).subscribe(
      (response) =>{
        console.log(response);

        this.serviciosModelGet = response.Usuario;
      }
    )
   }

   // eventos
   getEventosId(id){

    this._generalService.obtenerEventosId(id).subscribe(

      (response) =>{
        console.log(response);

        this.eventosModelGet = response.Usuario;

      }
    )
   }


   // ver habitaciones
   getHabitaciones(id){

    this._generalService.obtenerHabitacionesId(id).subscribe(

      (response) =>{
        console.log(response);

        this.habitacionesModelGet = response.Usuario;

      }
    )
   }


}
