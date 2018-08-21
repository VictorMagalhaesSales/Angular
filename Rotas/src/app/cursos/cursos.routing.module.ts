import { NgModule } from "@angular/core";
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const CursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'cursos/naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'cursos/:id', component: CursoDetalheComponent },
]


@NgModule({
    imports: [RouterModule.forChild(CursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule{}