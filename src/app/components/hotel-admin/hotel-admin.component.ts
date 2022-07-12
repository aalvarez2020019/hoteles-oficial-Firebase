import { Component, OnInit } from '@angular/core';
import { Hoteles } from 'src/app/models/hoteles.model';
import { ActivatedRoute } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';


@Component({
  selector: 'app-hotel-admin',
  templateUrl: './hotel-admin.component.html',
  styleUrls: ['./hotel-admin.component.scss'],
  providers: [HotelesService]
})
export class HotelAdminComponent implements OnInit {

  public hotelesModelGet: Hoteles;
  public hotelesModelPost: Hoteles;
  public hotelesModelGetId: Hoteles;
  public hotelesTodosModelGet: Hoteles;
  public token;
  public buscar;

  constructor(
    public _hotelesService: HotelesService,
    public _activatedRoute: ActivatedRoute
  ) {

    this.hotelesModelPost = new Hoteles('', '', '', '', '', '', '');
    this.hotelesModelGetId = new Hoteles('', '', '', '', '', '', '');
    this.token = this._hotelesService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idUser'));

      this.getHotelesAdmin(dataRuta.get('idUser'))
      // this.getHotelesTodos();

    })
  }

  getHotelesAdmin(idUsuario){
    this._hotelesService.obtenerHotelesAdmin(idUsuario, this.token).subscribe(

      (response)=>{
        this.hotelesModelGet = response.AdminApp;

        console.log(this.hotelesModelGet)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  getHotelId(idHotel){

    this._hotelesService.ObtenerIdHotel(idHotel, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.hotelesModelGetId = response.AdminApp;

      },

      (error)=>{
        console.log(error)

      }
    )
  }


  putUsuarios(){
    this._hotelesService.editarHoteles(this.hotelesModelGetId, this.token).subscribe(
      (response)=>{

        console.log(response);

        console.log(this.hotelesModelGetId.administradorHotel);
        this.getHotelesAdmin(this.hotelesModelGetId.administradorHotel);


      },(error)=>{

      }


    )
  }

  // eliminar usuarios
  eliminarUsuarios(id){
    this._hotelesService.eliminarHoteles(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getHotelesAdmin(id);


      },
      (error)=>{
        console.log(error)

    }
    )
  }

  getHotelesTodos(){

    this._hotelesService.obtenerHotelesTodos(this._hotelesService.obtenerToken()).subscribe(

     (response) => {
       this.hotelesTodosModelGet = response.Usuario;
       console.log(response);
     },
     (error) => {
       console.log(<any>error)

     }
    )
  }






}
