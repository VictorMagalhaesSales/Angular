import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../servicos/log.service';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static emitirCursoCriadoStatic = new EventEmitter<string>();


    cursos: string[] = ["Angular 2", "Spring MVC" , "Lógica de programação"]

    getCursos(){
        this.logService.console("Obtendo a lista de cursos");
        return this.cursos;
    }

    addCursos(curso: string){
        this.logService.console(`Adicionando um novo curso: ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.emitirCursoCriadoStatic.emit(curso);
    }

    constructor(private logService: LogService){
        console.log('instanciado');
    }
}