import { FormDebugComponent } from './../form-debug/form-debug.component';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { DataFormComponent } from './../data-form/data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent
  ],
  exports: [
    CampoControlErroComponent,
    FormDebugComponent
  ]
})
export class SharedModule { }
