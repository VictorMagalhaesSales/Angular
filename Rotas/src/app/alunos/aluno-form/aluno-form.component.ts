import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  podeDesativar(){
    
  }

}
