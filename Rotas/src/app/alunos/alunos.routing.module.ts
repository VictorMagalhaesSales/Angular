import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunosGuard } from './alunos.guard';
import { NgModule } from '@angular/core';
import { RouterModule, CanDeactivate } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const AlunosRoutes = [
    {path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent,
            CanDeactivate: [AlunosDeactivateGuard]
        }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(AlunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }