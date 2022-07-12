import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(hotel: any, buscarHotel: any): any {
    if(buscarHotel == undefined){
      return hotel;
    }else{
      return hotel.filter( hotelN =>{
        return hotelN.nombre.toLowerCase().includes(buscarHotel.toLowerCase());
      })
    }
  }
}
