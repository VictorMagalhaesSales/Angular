import { DataFormComponent } from './../data-form/data-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TemplateFormComponent],
  declarations: [
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent
  ]
})
export class TemplateFormModule { }
