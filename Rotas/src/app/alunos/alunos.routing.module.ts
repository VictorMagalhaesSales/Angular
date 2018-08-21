import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const AlunosRoutes = [
    {
        path: '', component: AlunosComponent, children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(AlunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }