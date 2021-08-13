import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgronomoModel } from '../agronomo.model';
import { AgronomoService } from '../agronomo.service';

@Component({
  selector: 'app-agronomo-update',
  templateUrl: './agronomo-update.component.html',
  styleUrls: ['./agronomo-update.component.css']
})
export class AgronomoUpdateComponent implements OnInit {
  agronomo: AgronomoModel = {
    IDRespTecnico: 0,
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
  constructor(private servico: AgronomoService, private rota: Router, private lblRota: ActivatedRoute) { }

  ngOnInit(): void {
    this.agronomo.IDRespTecnico = parseInt(this.lblRota.snapshot.paramMap.get('id')!);
    this.getAgronomoPorId();
  }
  getAgronomoPorId(): void {
    this.servico.getAgronomoPorId(this.agronomo.IDRespTecnico!).subscribe(
      (resposta) => {
        this.agronomo.IDRespTecnico = resposta.IDRespTecnico;
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
  updateAgronomo(): void {
    this.servico.updateAgronomo(this.agronomo).subscribe(
      (resposta) => {
        this.rota.navigate(['/responsavelTecnico']);
        this.servico.mensagem("Responsável Técnico atualizado")
      })
  }
}
