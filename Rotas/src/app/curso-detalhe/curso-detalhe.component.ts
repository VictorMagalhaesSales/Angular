import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  nome: string;
  sobrenome: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { 
    this.id = route.snapshot.params['id'];
    // this.nome = route.snapshot.params['nome'];
    // this.sobrenome = route.snapshot.params['sobrenome'];
  }

  ngOnInit() {
    this.inscricao= this.route.params.subscribe((params: any) => { this.id = params['id']; });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
