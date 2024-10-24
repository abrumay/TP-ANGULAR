
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { LoginComponent } from './login/login.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'basic-client', component: BasicPageComponent },
  { path: 'premium-client', component: PremiumPageComponent},
  { path: '**', redirectTo: '' } // Redirecciona a la página de login si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}