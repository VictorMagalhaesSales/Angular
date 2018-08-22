import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit {

  @Input() msg: string = '';
  @Input() erro: string = '';
  @Input() sucesso: string = '';

  constructor() { }

  ngOnInit() {
  }

  dataSucesso(sucesso){
    if(sucesso === ''){
      return "Correto";
    }else{
      return sucesso;
    }
  }
  
  dataErro(erro){
    if(erro === ''){
      return "Incorreto";
    }else{
      return erro;
    }
  }

}
