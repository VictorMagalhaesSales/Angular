import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./guards/auth.guard";

const AppRoutes: Routes = [
    { path: 'cursos', loadChildren: 'src/app/cursos/cursos.module#CursoModule',
        canActivate: [AuthGuard]
    },
    { path: 'alunos', loadChildren: 'src/app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent,
        canActivate: [AuthGuard]
    },
    { path: '', component: HomeComponent,
        canActivate: [AuthGuard]
    }
]


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}