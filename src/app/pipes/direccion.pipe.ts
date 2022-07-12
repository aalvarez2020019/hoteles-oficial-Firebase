import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direccion'
})
export class DireccionPipe implements PipeTransform {

  transform(hoteles: any, hotelesbuscar: any): any {
    if(hotelesbuscar == undefined){
      return hoteles;
    }else{
      return hoteles.filter( hotelD =>{
        return hotelD.direccion.toLowerCase().includes(hotelesbuscar.toLowerCase());
      })
    }
  }

}
