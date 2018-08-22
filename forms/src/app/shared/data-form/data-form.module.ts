import { SharedModule } from './../shared.module';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }
