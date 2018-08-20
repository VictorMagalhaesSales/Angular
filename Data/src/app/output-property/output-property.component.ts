import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() contador: number = 0;




  diminui(){
    this.contador--;
  }

  aumenta(){
    this.contador++;
  }



  constructor() { }

  ngOnInit() {
  }

}
