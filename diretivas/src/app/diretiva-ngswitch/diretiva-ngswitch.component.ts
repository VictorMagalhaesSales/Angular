import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {


  ativado: string = "fotos";

  mudou(v: string){
    this.ativado = v;
  }

  constructor() { }

  ngOnInit() {
  }

}
