import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeerusuariosComponent } from './components/leerusuarios/leerusuarios.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { LoginComponent } from './components/login/login.component';
import { ParteprivadaComponent } from './components/parteprivada/parteprivada.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'leerusuarios',
    component: LeerusuariosComponent,
  },
  {
    path: 'crearusuarios',
    component: CrearusuarioComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'parteprivada',
    component: ParteprivadaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
