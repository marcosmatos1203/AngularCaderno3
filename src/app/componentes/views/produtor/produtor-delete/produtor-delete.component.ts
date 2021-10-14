import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutorModel } from '../produtor.model';
import { ProdutorService } from '../produtor.service';

@Component({
  selector: 'app-produtor-delete',
  templateUrl: './produtor-delete.component.html',
  styleUrls: ['./produtor-delete.component.css']
})
export class ProdutorDeleteComponent implements OnInit {
  produtor: ProdutorModel = {
    id: 0,
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

  constructor(private servico: ProdutorService, private lblRota: ActivatedRoute, private rota: Router) { }

  ngOnInit(): void {

    this.produtor.id = parseInt(this.lblRota.snapshot.paramMap.get('id')!);
    this.getProdutorPorId();
  }
  getProdutorPorId(): void {
    this.servico.getProdutorPorId(this.produtor.id!).subscribe(
      (resposta) => {
        this.produtor.id = resposta.id;
        this.produtor.nome = resposta.nome;
        this.produtor.logradouro = resposta.logradouro;
        this.produtor.bairro_localidade = resposta.bairro_localidade;
        this.produtor.cidade = resposta.cidade;
        this.produtor.estado = resposta.estado;
        this.produtor.cep = resposta.cep;
        this.produtor.email = resposta.email;
        this.produtor.telefone1 = resposta.telefone1;
        this.produtor.telefone2 = resposta.telefone2;
      })
  }
  deletarProdutor(): void {
    this.servico.deleteProdutor(this.produtor.id!).subscribe(
      (resposta) => {
        this.rota.navigate(['produtor']);
        this.servico.mensagem("Produtor Excluído");
      }
    )
  }
}
