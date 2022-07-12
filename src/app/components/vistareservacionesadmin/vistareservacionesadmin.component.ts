import { Component, OnInit } from '@angular/core';
import { Reservaciones } from 'src/app/models/reservaciones.model';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-vistareservacionesadmin',
  templateUrl: './vistareservacionesadmin.component.html',
  styleUrls: ['./vistareservacionesadmin.component.scss'],
  providers: [UsuariosService]
})
export class VistareservacionesadminComponent implements OnInit {

  public reservacionesModelGet: Reservaciones;
  public token;


  constructor(
    public _usuariosService: UsuariosService,
    public _activatedRoute: ActivatedRoute,
  ) {

    this.token = this._usuariosService.obtenerToken();

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));

      this.getReservacionesId(dataRuta.get('idHotel'));

      // this.getHotelesTodos();

    })
  }

  // get habitaciones
  getReservacionesId(idHab){

    this._usuariosService.verReservacionesHab(idHab, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.reservacionesModelGet = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

}
