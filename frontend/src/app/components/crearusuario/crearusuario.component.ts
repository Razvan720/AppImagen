import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.scss']
})
export class CrearusuarioComponent implements OnInit {

  public formUser: FormGroup;
  public misUsuarios: MimodeloService;
  private patronEmail = '^[a-z0-9.%+-]+@[a-z0-9.%+-]+\.[a-z]{2,4}$'
  constructor(private formBuilder: FormBuilder, private mimodeloService: MimodeloService) {
    this.formUser = formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      foto: ['', [Validators.required, Validators.pattern(this.patronEmail)]]
    })
  }

  ngOnInit() {

  }

  submit() {
    this.mimodeloService.saveUsuario(this.formUser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      })
  }

  get nombre() {
    return this.formUser.get("nombre");
  }

  get foto() {
    return this.formUser.get("foto");
  }
}
