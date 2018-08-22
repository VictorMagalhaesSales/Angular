import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { DataFormComponent } from './../data-form/data-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [TemplateFormComponent],
  declarations: [
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ]
})
export class TemplateFormModule { }
