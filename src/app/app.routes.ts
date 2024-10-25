
import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { LoginComponent } from './login/login.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { HomeComponent } from './home/home.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'ver-perfil', component: VerPerfilComponent},
  { path: 'modificar-usuario', component: ModificarUsuarioComponent},
  { path: 'admin', component: AdminPageComponent },
  { path: 'basic-client', component: BasicPageComponent },
  { path: 'premium-client', component: PremiumPageComponent},
  { path: 'rutinas',component: RoutineListComponent},
  { path: 'register',component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch:'full' } // Redirecciona a la página de login si la ruta no se encuentra
];

export class AppRoutingModule {}
