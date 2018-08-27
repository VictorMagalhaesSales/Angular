import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ],
  declarations: [
    CursosListaComponent
  ]
})
export class CursosModule { }
