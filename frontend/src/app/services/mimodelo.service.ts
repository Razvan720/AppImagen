import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mimodelo } from '../modelo/mimodelo';

@Injectable({
  providedIn: 'root'
})
export class MimodeloService {

  constructor(private http: HttpClient) {

  }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  getUsuario(id: String): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/${id}');
  }

  saveUsuario(usuario: Mimodelo): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }

  deleteUsuarios(id: String): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/${id}');
  }

  updateUsuarios(id: String, usuario: Mimodelo): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/${id}', usuario);
  }

  getLogin(usuario: Mimodelo): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login/', usuario);
  }

  //Parte de comprobar login
  logIn(){
    return !! localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}