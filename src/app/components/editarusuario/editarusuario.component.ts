import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss'],
  providers: [UsuariosService]
})
export class EditarusuarioComponent implements OnInit {

  public token;

  public usuariosModelGetId: Usuarios;
  // public usuariosModelGet: Usuarios;


  constructor(public _usuariosService: UsuariosService) {


    this.usuariosModelGetId = new Usuarios('', '', '', '', '', '', '');

    this.token = this._usuariosService.obtenerToken()

   }

  ngOnInit(): void {

    this.getUsuariosId(this._usuariosService.obtenerIdentidad()._id);

  }

  getUsuariosId(idUsuario){
    this._usuariosService.verIdUsuario(idUsuario, this._usuariosService.obtenerToken()).subscribe(

      (response)=>{
        this.usuariosModelGetId = response.Usuario;
        console.log(this.usuariosModelGetId )
      },

    )
  }


  putUsuarios(){
    this._usuariosService.usuariosEditarU(this.usuariosModelGetId, this._usuariosService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);


      },

    )
  }

  eliminarUsuarios(id){
    this._usuariosService.usuariosEliminar(id, this.token).subscribe(

      (response)=>{
        console.log(response);

      },
      (error)=>{
        console.log(error)

    }
    )
  }

   // ver Controles
   /* getUsuarios(){
    this._usuariosService.usuariosVerTodos(this._usuariosService.obtenerToken()).subscribe(

     (response) => {

       this.usuariosModelGet = response.Usuario;
       console.log(this.usuariosModelGet);
     },

    )
   }*/



}
