import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;

  constructor(private cursoService: CursosService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.route.queryParams.subscribe(
      (queryParams :any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}})
  }

}
