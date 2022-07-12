import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HotelAdminComponent } from './components/hotel-admin/hotel-admin.component';
import { VistaAdminHotelComponent } from './components/vista-admin-hotel/vista-admin-hotel.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { VermodaladminhotelComponent } from './components/vermodaladminhotel/vermodaladminhotel.component';
import { VermodalusuariosComponent } from './components/vermodalusuarios/vermodalusuarios.component';
import { VistageneralComponent } from './components/vistageneral/vistageneral.component';
import { VistahabitacionesadminComponent } from './components/vistahabitacionesadmin/vistahabitacionesadmin.component';
import { VistareservacionesadminComponent } from './components/vistareservacionesadmin/vistareservacionesadmin.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { FacturaComponent } from './components/factura/factura.component';

// ROL ADMIN
import { RoladminGuard } from './services/roladmin.guard';
import { AdminappComponent } from './components/adminapp/adminapp.component';

// ROL ADMIN HOTEL
import { AdminhotelGuard } from './services/adminhotel.guard';
import { AdminhotelComponent } from './components/adminhotel/adminhotel.component';


// ROL USUARIO
import { RolusuarioGuard } from './services/rolusuario.guard';
import { AppusuariosComponent } from './components/appusuarios/appusuarios.component';
import { VermodalreservacionesComponent } from './components/vermodalreservaciones/vermodalreservaciones.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'vistageneral/:idHotel', component: VistageneralComponent},


  // ROL_ADMIN

  { path: 'admin', component: AdminappComponent, canActivate: [RoladminGuard], children:[

    { path: 'usuarios', component: UsuariosComponent},

    { path: 'hotelAdmin/:idUser', component: HotelAdminComponent},
    { path: 'vistaHabitacionesAdmin/:idHotel', component: VistahabitacionesadminComponent},
    { path: 'vistareservacionesAdmin/:idHotel', component: VistareservacionesadminComponent},

  ]},

  // ADMIN_HOTEL

  { path: 'adminhotel', component: AdminhotelComponent, canActivate: [AdminhotelGuard], children:[

    { path: 'vista-admin-hotel', component: VistaAdminHotelComponent},
    { path: 'modalAdminHotel/:idHotel', component: VermodaladminhotelComponent},
    { path: 'factura/:idhab', component: FacturaComponent},

  ]},

  // ROL_USUARIO

  { path: 'usuario', component: AppusuariosComponent, canActivate: [RolusuarioGuard], children:[

    { path: 'vistaUsuario', component: VistaUsuarioComponent},
    { path: 'modalUsuarios/:idHotel', component: VermodalusuariosComponent},
    { path: 'editarusuario', component: EditarusuarioComponent},
    { path: 'modalreservacion/:idReservacion', component: VermodalreservacionesComponent}

  ]},







  { path: "**", component: LoginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
