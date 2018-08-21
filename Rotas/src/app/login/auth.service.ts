import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();


  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario){
    if(usuario.nome === "usuario@gmail.com" && usuario.senha === "123"){
      this.usuarioAutenticado = false;
      this.router.navigate(['/']);
      this.mostrarMenu.emit(true);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenu.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
