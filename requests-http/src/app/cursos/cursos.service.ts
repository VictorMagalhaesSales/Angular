import { tap, delay, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) {

  }

  list(){
    return this.http.get<Curso[]>(this.API)
      .pipe(
        tap(console.log),
        delay(200)
      )
  }

  set(id, nome){
    return this.http.post(this.API, {"id": Number.parseFloat(id), "nome": nome})
    .subscribe((data:any) => console.log(data));
  }
}
