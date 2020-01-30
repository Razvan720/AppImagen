import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeerusuariosComponent } from './components/leerusuarios/leerusuarios.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
