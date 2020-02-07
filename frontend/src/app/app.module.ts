import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { LeerusuariosComponent } from './components/leerusuarios/leerusuarios.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { LoginComponent } from './components/login/login.component';
import { ParteprivadaComponent } from './components/parteprivada/parteprivada.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarranavegacionComponent,
    LeerusuariosComponent,
    CrearusuarioComponent,
    LoginComponent,
    ParteprivadaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
