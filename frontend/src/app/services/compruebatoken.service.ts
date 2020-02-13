import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { GLoginUserGuard } from './g-login-user.guard';
import { MimodeloService } from './mimodelo.service';


@Injectable({
  providedIn: 'root'
})
export class CompruebatokenService implements HttpInterceptor {

  constructor(private mimodeloservice: MimodeloService) { }

  intercept (req: any, next: any) {

    const tokenI = req.clone({
      setHeaders: {
        Authorization: 'miaplicacion' + this.mimodeloservice.getToken()
      }
    });
    return next.handle(tokenI);
    
  }
}
