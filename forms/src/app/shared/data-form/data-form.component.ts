import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    // PRIMEIRA FORMA

    // this.formulario = new FormGroup({
    //   nome: new FormControl('Victor'),
    //   email: new FormControl(null)
    // });


    // SEGUNDA FORMA

    this.formulario = this.formBuilder.group({
      nome: ['Victor'],
      email: [null]
    });

  }

}
