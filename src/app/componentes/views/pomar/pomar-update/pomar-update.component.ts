import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgronomoModel } from '../../agronomo/agronomo.model';
import { AgronomoService } from '../../agronomo/agronomo.service';
import { ProdutorModel } from '../../produtor/produtor.model';
import { ProdutorService } from '../../produtor/produtor.service';
import { PomarModel } from '../pomar.model';
import { PomarService } from '../pomar.service';

@Component({
  selector: 'app-pomar-update',
  templateUrl: './pomar-update.component.html',
  styleUrls: ['./pomar-update.component.css']
})
export class PomarUpdateComponent implements OnInit {
  produtorSelecionado: ProdutorModel = {
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
  respTecnicoSelecionado: AgronomoModel = {
    IDRespTecnico: 0,
    nome: "",
    logradouro: "",
    bairro_localidade: "",
    cidade: "",
    estado: "",
    cep: "",
    email: "",
    telefone1: "",
    telefone2: "",
    crea: "",
  }
  pomar: PomarModel = {
    nome: "",
    logradouro: "",
    bairro_localidade: "",
    cidade: "",
    estado: "",
    cep: "",
    Produtor: this.produtorSelecionado,
    RespTecnico: this.respTecnicoSelecionado,
  }
  constructor(private servicoPomar: PomarService,private servicoProdutor: ProdutorService,private servicoRespTecnico: AgronomoService, private rota: Router, private lblRota: ActivatedRoute) { }

  ngOnInit(): void {
  }

}