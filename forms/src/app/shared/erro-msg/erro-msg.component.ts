import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { DataFormComponent } from '../../data-form/data-form.component';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent implements OnInit {


  //@Input() teste: boolean;
  //@Input() msg: string;

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return DataFormComponent.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }
    
    return null;
  }

}
