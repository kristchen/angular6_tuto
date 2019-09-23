import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro;
  conversao;

  constructor(private fb: FormBuilder) { 
    
  }

  cadastro(){
    debugger
    console.log(this.formCadastro.controls);
    this.conversao = JSON.stringify(this.formCadastro.value);
    localStorage.setItem('cadastro', this.conversao);
   }

  ngOnInit() {

    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [],
      email: [],
      telefone: [],
      endereco: []
    });
  }

}
