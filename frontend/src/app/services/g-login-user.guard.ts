import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MimodeloService } from './mimodelo.service';


@Injectable({
  providedIn: 'root'
})

export class GLoginUserGuard implements CanActivate {

  constructor(private mimodelo: MimodeloService, private router: Router) {
  };

  canActivate(): boolean {
    if (this.mimodelo.logIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;

  }



}
