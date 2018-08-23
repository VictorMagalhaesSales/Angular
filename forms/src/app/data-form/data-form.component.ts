import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/services/estado-br.model';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr()
      .subscribe(dados => { this.estados = dados; console.log(dados); });
    // ------------- PRIMEIRA FORMA -------------
    // this.formulario = new FormGroup({
    //   nome: new FormControl('Victor'),
    //   email: new FormControl(null)
    // });
    // ------------- SEGUNDA FORMA -------------
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
      email: [null, [Validators.required, Validators.email] ],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.maxLength(9), Validators.minLength(8)]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

  }

  onSubmit(){
    console.log(this.formulario);

    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => {
          console.log(dados);
          //this.formulario.reset();
        },
        (erro: any) => alert('erro')
      );
    }else{
      this.verificaValidacoesForm(this.formulario);
    }

  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach( campos => {
      const campo = formGroup.get(campos);
      campo.markAsTouched();
      if(campo instanceof FormGroup){
        this.verificaValidacoesForm(campo);
      }
    })
  }

  resetarForm(){
    this.formulario.reset();
  }

  
  verificaErro(input){
    if( ( !(this.formulario.get(input).valid) && this.formulario.get(input).touched ) ) {
      return true
    }else{
      return false;
    }
  }

  consultaCEP(){

    let cep = this.formulario.get('endereco.cep').value;  

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {

      var validacep = /^[0-9]{8}$/;


      if(validacep.test(cep)){
        
        this.resetaDadosForm();

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados));
      }
      
    }
  }
  
  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  populaDadosForm(dados){
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }


}
