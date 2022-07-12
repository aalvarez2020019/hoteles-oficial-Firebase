import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { ActivatedRoute } from '@angular/router';

// importacion services hoteles
import { AdminhotelesService } from 'src/app/services/adminhoteles.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  providers: [AdminhotelesService]
})
export class FacturaComponent implements OnInit {

  public facturaModelGetId: Factura;
  public token;

  constructor(

    public _adminhotelservice: AdminhotelesService,
    public _activatedRoute: ActivatedRoute,

  ) {
    this.token = this._adminhotelservice.obtenerToken();

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idhab'));

      this.getFacturaHab(dataRuta.get('idhab'));


      // this.getHotelesTodos();

    })
  }

  // ver eventos admin
  getFacturaHab(idHab){

    this._adminhotelservice.getFacturaHabitacion(idHab, this.token).subscribe(

      (response)=>{

        this.facturaModelGetId = response.Usuario;

        console.log(this.facturaModelGetId);

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  // eliminar factura
  eliminarFactura(id){
    this._adminhotelservice.eliminarFactura(id, this.token).subscribe(

      (response)=>{
        console.log(response);
        this.getFacturaHab(id);


      },
      (error)=>{
        console.log(error)

    }
    )
  }

}
