import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);