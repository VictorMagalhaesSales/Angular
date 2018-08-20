import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  // AULA 1  cursosService: CursosService;
  cursos: string[] = [];

  constructor(private cursosService: CursosService) { 
   // AULA 1  this.cursosService = new CursosService();
   // this.cursosService = cursosService2;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.emitirCursoCriadoStatic.subscribe(
      // function(curso){
      //   console.log('curso')
      // }
      curso => this.cursos.push(curso)
    );
  }

}