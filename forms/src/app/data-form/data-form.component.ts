import { VerificaEmailService } from './services/verifica-email.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/services/estado-br.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs';

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
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) { }

  ngOnInit() {
    //this.verificaEmailService.verificarEmail('email@email.com').subscribe();


    //console.log(this.formulario);
    this.dropdownService.getEstadosBr().subscribe(dados => {
      this.estados = dados;
      //console.log(dados);
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
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, [this.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, this.cepValidator]],
        numero: [null,],
        complemento: [null],
        rua: [null,],
        bairro: [null,],
        cidade: [null,],
        estado: [null,],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFramkeworks()
    });
    //console.log(this.formulario);

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});

  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

  buildFramkeworks() {

    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, this.requiredMinCheckbox(1));

    /* this.formBuilder.array([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])*/
  }

  requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      /* PROGRAMAÇÃO ESTRUTURADA
      const values = formArray.controls;
      let totalChecked = 0
      for(let i=0; i < values.length; i++){
        if(values[i].value){
          totalChecked += 1;
        }
    } PROGRAMAÇÃO FUNCIONAL E REATIVA */
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    }
    return validator;
  }

  cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep != '') {
      var validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }

    return null;
  }

  equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      // console.log((<FormGroup>formControl.root));

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };
    return validator;
  }

  onSubmit() {
    //console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });

    console.log(valueSubmit);

    /* if (this.formulario.valid) {
       this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
         .subscribe(dados => {
           console.log(dados);
           //this.formulario.reset();
         },
           (erro: any) => alert('erro')
         );
     } else {
       this.verificaValidacoesForm(this.formulario);
     }*/

  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campos => {
      const campo = formGroup.get(campos);
      campo.markAsTouched();
      if (campo instanceof FormGroup) {
        this.verificaValidacoesForm(campo);
      }
    })
  }

  resetarForm() {
    this.formulario.reset();
  }


  verificaErro(input) {
    if ((!(this.formulario.get(input).valid) && this.formulario.get(input).touched)) {
      return true
    } else {
      return false;
    }
  }

  consultaCEP() {

    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  resetaDadosForm() {
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

  populaDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }


  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue({ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' });
    console.log({ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' });
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.',
      'emailInvalido': 'Email já cadastrado!',
      'equalsTo': 'Campos não são iguais',
      'pattern': 'Campo inválido'
    };

    return config[validatorName];
  }
}