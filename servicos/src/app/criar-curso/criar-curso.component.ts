import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[];

  constructor(private cursosService: CursosService) { }

  addCurso(evento){
    this.cursosService.addCursos(evento);
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    
  }

}
