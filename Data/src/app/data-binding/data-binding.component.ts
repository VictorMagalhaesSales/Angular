import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{

  // ===================----- Event Binding -----===================

  valorSalvo: string = '';
  valorAtual: string = '';
  mouseTeste: boolean = false;

  acao(){
    alert('asd');
  }

  onKeyUp(evento: KeyboardEvent){
      console.log((<HTMLInputElement>evento.target).value);
      this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento){
    this.valorSalvo = (<HTMLInputElement>evento.target).value;
  }

  perdeFoco(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.mouseTeste = !this.mouseTeste;
    console.log(this.mouseTeste);
  }
  
  // ===================----- Two-way data binding -----===================

  twoWay: string = 'abc';
  pessoa: any = {
    nome: 'Victor',
    idade: 17
  }

  // ===================----- Input Property -----===================

  nomeDoCurso: string = "Angular";

  // ===================----- Output Property -----===================

  contadorInicial: number = 50;

  constructor() { }

}
