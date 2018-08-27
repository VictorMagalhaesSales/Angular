import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];

  cursoDestaque = {
    id: 1,
    nome: "padrão"
  }

  cursos$: Observable<Curso[]>;

  constructor(private serviceCurso: CursosService, private router: Router) { }

  ngOnInit() {
    //this.service.list()
      //.subscribe(dados => this.cursos = dados);
    this.cursos$ = this.serviceCurso.list();
  }

  abrirEditar(id: number, nome: any){
    this.cursoDestaque.id = id;
    this.cursoDestaque.nome = nome;
  }

  cadastrarCurso(id: number, nome: string){
    this.serviceCurso.set(id,nome);
    //this.router.navigate[("/curso")];
  }
}
