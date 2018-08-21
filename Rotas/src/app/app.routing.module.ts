import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const AppRoutes: Routes = [
    { path: 'cursos', loadChildren: 'src/app/cursos/cursos.module#CursoModule' },
    { path: 'alunos', loadChildren: 'src/app/alunos/alunos.module#AlunosModule' },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}