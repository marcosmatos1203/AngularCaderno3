import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgronomoModel } from '../agronomo.model';
import { AgronomoService } from '../agronomo.service';

@Component({
  selector: 'app-agronomo-delete',
  templateUrl: './agronomo-delete.component.html',
  styleUrls: ['./agronomo-delete.component.css']
})
export class AgronomoDeleteComponent implements OnInit {
  agronomo: AgronomoModel = {
    id: 0,
    nome: '',
    logradouro: '',
    bairro_localidade: '',
    cidade: '',
    estado: '',
    cep: '',
    email: '',
    telefone1: '',
    telefone2: '',
    crea: ''
  }
  constructor(private servico: AgronomoService, private lblRota: ActivatedRoute, private rota: Router) { }

  ngOnInit(): void {
    this.agronomo.id = parseInt(this.lblRota.snapshot.paramMap.get('id')!);
    this.getAgronomoPorId();
  }
  getAgronomoPorId(): void {
    this.servico.getAgronomoPorId(this.agronomo.id!).subscribe(
      (resposta) => {
        this.agronomo.id = resposta.id;
        this.agronomo.nome = resposta.nome;
        this.agronomo.logradouro = resposta.logradouro;
        this.agronomo.bairro_localidade = resposta.bairro_localidade;
        this.agronomo.cidade = resposta.cidade;
        this.agronomo.estado = resposta.estado;
        this.agronomo.cep = resposta.cep;
        this.agronomo.email = resposta.email;
        this.agronomo.telefone1 = resposta.telefone1;
        this.agronomo.telefone2 = resposta.telefone2;
        this.agronomo.crea = resposta.crea;
      })
  }
  deleteAgronomo(): void {
    this.servico.deleteAgronomo(this.agronomo.id!).subscribe(
      (resposta) => {
        this.rota.navigate(['responsavelTecnico']);
        this.servico.mensagem("Responsável Técnico excluído com sucesso")
      }
    )
  }
}
