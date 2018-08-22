import { SharedModule } from './../shared/shared.module';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  exports: [TemplateFormComponent],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
