import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public misUsuarios: MimodeloService;

  constructor(private router:Router, private formBuilder: FormBuilder, private mimodeloService: MimodeloService) {
    this.formLogin = formBuilder.group({
      nombre: [''],
      foto: ['']
    })
  }


  ngOnInit() {
  }

  submit() {
    
   this.mimodeloService.getLogin(this.formLogin.value).subscribe(
      res => {
        //console.log(res);
        localStorage.setItem('token', res);
        this.router.navigate(['/parteprivada']);

      },
      err => {
        console.log(err);
      })
  }

  get nombre() {
    return this.formLogin.get("nombre");
  }

  get foto() {
    return this.formLogin.get("foto");
  }

}
