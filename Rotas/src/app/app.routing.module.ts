import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './alunos/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./guards/auth.guard";

const AppRoutes: Routes = [
    { path: 'cursos', loadChildren: 'src/app/cursos/cursos.module#CursoModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos', loadChildren: 'src/app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent
    },
    { path: 'home', component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}