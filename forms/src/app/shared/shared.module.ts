import { HttpModule } from '@angular/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroMsgComponent } from './erro-msg/erro-msg.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent,
    ErroMsgComponent
  ],
  exports: [
    CampoControlErroComponent,
    FormDebugComponent,
    ErroMsgComponent
  ]
})
export class SharedModule { }
