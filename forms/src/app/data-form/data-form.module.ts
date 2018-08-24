import { VerificaEmailService } from './services/verifica-email.service';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    DataFormComponent
  ],
  providers: [VerificaEmailService]
})
export class DataFormModule { }
