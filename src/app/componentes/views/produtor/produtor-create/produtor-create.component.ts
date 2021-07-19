import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../produtor.service';
import { ProdutorModel } from '../produtor.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produtor-create',
  templateUrl: './produtor-create.component.html',
  styleUrls: ['./produtor-create.component.css']
})
export class ProdutorCreateComponent implements OnInit {

  produtor: ProdutorModel = {
    nome: "",
    logradouro: "",
    bairro_localidade: "",
    cidade: "",
    estado: "",
    cep: "",
    email: "",
    telefone1: "",
    telefone2: "",
  }

  constructor(private servico: ProdutorService, private rota: Router) { }

  ngOnInit(): void {
  }
  addProdutor(): void {
    this.servico.addProdutor(this.produtor).subscribe(
      (resposta) => {
        this.rota.navigate(['produtor'])
        this.servico.mensagem("Produtor cadastrado com sucesso");
      
      });
  }
}
