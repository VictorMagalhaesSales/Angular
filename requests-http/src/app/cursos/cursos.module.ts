import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosLitaComponent } from './cursos-lita/cursos-lita.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosLitaComponent
  ]
})
export class CursosModule { }
