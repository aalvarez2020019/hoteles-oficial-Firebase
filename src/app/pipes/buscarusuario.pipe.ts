import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarusuario'
})
export class BuscarusuarioPipe implements PipeTransform {

  transform(usuarios: any, buscarUser: any): any {
    if(buscarUser == undefined){
      return usuarios;
    }else{
      return usuarios.filter( userN =>{
        return userN.nombreUsuario.toLowerCase().includes(buscarUser.toLowerCase());
      })
    }
  }
}
