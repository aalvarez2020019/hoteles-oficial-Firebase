import { Component, OnInit } from '@angular/core';
import { RolusuarioService } from 'src/app/services/rolusuario.service';
import { Usuarios } from 'src/app/models/usuario.model';
import { Reservaciones } from 'src/app/models/reservaciones.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vermodalreservaciones',
  templateUrl: './vermodalreservaciones.component.html',
  styleUrls: ['./vermodalreservaciones.component.scss'],
  providers: [RolusuarioService]

})
export class VermodalreservacionesComponent implements OnInit {

  public reservacionesModelGet: Reservaciones;
  public token;

  constructor(
    public _rolUsuarioService: RolusuarioService,
    public _activatedRoute: ActivatedRoute,

  ) {
    this.token = this._rolUsuarioService.obtenerToken();
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idReservacion'));

      this.getReservacionesUser(dataRuta.get('idReservacion'));

    })
  }

  getReservacionesUser(idUser){
    this._rolUsuarioService.reservacionUser(idUser, this.token).subscribe(

      (response)=>{
        this.reservacionesModelGet = response.Usuario;

        console.log(this.reservacionesModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

   // eliminar reservaciones
   eliminarReservaciones(id){
    this._rolUsuarioService.eliminarReservaciones(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getReservacionesUser(id);


      },
      
      (error)=>{
        console.log(error)

    }
    )
  }

}
