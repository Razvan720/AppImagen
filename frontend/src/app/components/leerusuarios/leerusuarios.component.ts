import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { Mimodelo } from 'src/app/modelo/mimodelo';

@Component({
  selector: 'app-leerusuarios',
  templateUrl: './leerusuarios.component.html',
  styleUrls: ['./leerusuarios.component.scss']
})
export class LeerusuariosComponent implements OnInit {

  private usuarios: Mimodelo;

  constructor(private mimodeloService:MimodeloService) { }

  ngOnInit() {
    this.mimodeloService.getUsuarios().subscribe(
      res=> {
        console.log(res);
        this.usuarios = res;
      },
      err=> {
        console.log(err);
      }
    );
  }

}
