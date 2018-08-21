import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu: boolean = false;
  
  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
