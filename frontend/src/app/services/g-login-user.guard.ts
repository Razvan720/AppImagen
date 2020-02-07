import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MimodeloService } from './mimodelo.service';


@Injectable({
  providedIn: 'root'
})

export class GLoginUserGuard implements CanActivate {

  constructor(private mimodelo: MimodeloService) {

  };
  canActivate(): boolean {
    if (this.mimodelo.logIn()) {
      return true;
    }
    this.router.navigate(['login']);

  }



}
