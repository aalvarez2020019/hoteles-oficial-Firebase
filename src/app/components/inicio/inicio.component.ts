import { Component, OnInit } from '@angular/core';
import { Hoteles } from 'src/app/models/hoteles.model';
import { Servicios } from 'src/app/models/servicios.model';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { Eventos } from 'src/app/models/eventos.model';

import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [GeneralService]

})
export class InicioComponent implements OnInit {

  public hotelesModelGet: Hoteles;
  public hotelesModelGetId: Hoteles;
  public buscar;


  constructor(
    public _generalService: GeneralService,
  ) {
    this.hotelesModelGetId = new Hoteles('', '', '', '', '', '', '');


   }

  ngOnInit(): void {
    this.getHoteles();
  }

  getHoteles(){
    this._generalService.getHotelesTodos().subscribe(

     (response) => {
      this.hotelesModelGet = response.Usuario;
       console.log(this.hotelesModelGet);

     },
     (error) =>{
      console.log(<any>error)
     }


    )
   }

   getHotelesId(id){
    this._generalService.obtenerHotelesId(id).subscribe(
      (response) =>{
        console.log(response);

        this.hotelesModelGetId = response.Usuario;
      }
    )
   }






}
