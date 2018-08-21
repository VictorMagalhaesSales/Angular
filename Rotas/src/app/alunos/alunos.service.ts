import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: "Victor", email: "victormagalhaessales@gmail.com"},
    {id: 2, nome: "Nicolas", email: "nicolas@gmail.com"},
    {id: 3, nome: "Renan", email: "renans@gmail.com"},
    {id: 4, nome: "Lucas", email: "lucass@gmail.com"}
  ]

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i < this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
