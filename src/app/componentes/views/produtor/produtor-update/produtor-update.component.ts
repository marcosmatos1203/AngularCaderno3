import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutorModel } from '../produtor.model';
import { ProdutorService } from '../produtor.service';

@Component({
  selector: 'app-produtor-update',
  templateUrl: './produtor-update.component.html',
  styleUrls: ['./produtor-update.component.css']
})
export class ProdutorUpdateComponent implements OnInit {
  produtor: ProdutorModel = {
    IDProdutor: 0,
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
  constructor(private servico: ProdutorService, private rota:Router, private lblrota:ActivatedRoute) { }

  ngOnInit(): void {
    this.produtor.IDProdutor=parseInt(this.lblrota.snapshot.paramMap.get('id')!);
    this.getProdutorPorId();
  }
  getProdutorPorId():void{
    this.servico.getProdutorPorId(this.produtor.IDProdutor!).subscribe(
      (resposta) => {
        this.produtor.IDProdutor = resposta.IDProdutor;
        this.produtor.nome = resposta.nome;
        this.produtor.logradouro = resposta.logradouro;
        this.produtor.bairro_localidade = resposta.bairro_localidade;
        this.produtor.cidade = resposta.cidade;
        this.produtor.estado = resposta.estado;
        this.produtor.cep = resposta.cep;
        this.produtor.email = resposta.email;
        this.produtor.telefone1 = resposta.telefone1;
        this.produtor.telefone2 = resposta.telefone2;      
      });
  }
  updateProdutor(): void {
    this.servico.updateProdutor(this.produtor).subscribe(
      (resposta) => {
        this.rota.navigate(['/produtor']);
        this.servico.mensagem("Produtor atualizado")
      })
  }
}
