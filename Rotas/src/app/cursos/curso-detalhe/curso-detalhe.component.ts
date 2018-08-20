import { CursosService } from './../cursos.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  nome: string;
  sobrenome: string;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) { 
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao= this.route.params.subscribe(
      (params: any) => { this.id = params['id']; 
      this.curso = this.cursoService.getCurso(this.id);
      if(this.curso == null){
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
