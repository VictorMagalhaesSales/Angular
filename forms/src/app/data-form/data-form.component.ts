import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/services/estado-br.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks = ['Angular','React','Vue','Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
    this.dropdownService.getEstadosBr().subscribe(dados => {
      this.estados = dados;
      console.log(dados);
    });
    this.cargos = this.dropdownService.getCargos();
    console.log(this.dropdownService.getCargos());

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOp = this.dropdownService.getNewsletter();
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
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFramkeworks()
    });

  }

  buildFramkeworks(){

    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values);

    /* this.formBuilder.array([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])*/
  }

  requiredMinCheckbox(min = 1){
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls;
    };
  }

  onSubmit(){
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });

    console.log(valueSubmit);

    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
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

    if(cep != null && cep !== ''){
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
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


  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue({ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' });
    console.log({ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' });
  }

  compararCargos(obj1, obj2){
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }



}