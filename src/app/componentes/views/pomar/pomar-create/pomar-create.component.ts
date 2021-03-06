
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgronomoModel } from '../../agronomo/agronomo.model';
import { AgronomoService } from '../../agronomo/agronomo.service';
import { ProdutorModel } from '../../produtor/produtor.model';
import { ProdutorService } from '../../produtor/produtor.service';
import { PomarModel } from '../pomar.model';
import { PomarService } from '../pomar.service';

@Component({
  selector: 'app-pomar-create',
  templateUrl: './pomar-create.component.html',
  styleUrls: ['./pomar-create.component.css']
})
export class PomarCreateComponent implements OnInit {
  agronomos: AgronomoModel[] = [];

  displayFn(subject: any) {
    return subject ? subject.IDRespTecnico : undefined;
  }
  myFormControl = new FormControl;


  produtorSelecionado: ProdutorModel = {
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
  respTecnicoSelecionado: AgronomoModel = {
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
    crea: "",
  }
  pomar: PomarModel = {
    nome: "",
    logradouro: "",
    bairro_localidade: "",
    cidade: "",
    estado: "",
    cep: "",
    produtorId:this.produtorSelecionado.id!,
    respTecnicoId:this.respTecnicoSelecionado.id!,
    Produtor: this.produtorSelecionado,
    RespTecnico: this.respTecnicoSelecionado,
  }
  constructor(private lblRota: ActivatedRoute, private servicoRespTecnico: AgronomoService, private servicoProdutor: ProdutorService, private servicoPomar: PomarService, private rota: Router) { }

  ngOnInit(): void {
    this.produtorSelecionado.id = parseInt(this.lblRota.snapshot.paramMap.get('id')!);
    this.getProdutorPorId();
    this.getAgronomos();
  }
  getAgronomos() {
    this.servicoRespTecnico.getAgronomos().subscribe(
      retorno => {
        this.agronomos = retorno;
      })
  }
  getAgronomoPorId(): void {
    this.servicoRespTecnico.getAgronomoPorId(this.respTecnicoSelecionado.id!).subscribe(
      (resposta) => {
        this.respTecnicoSelecionado.id = resposta.id;
        this.respTecnicoSelecionado.nome = resposta.nome;
        this.respTecnicoSelecionado.logradouro = resposta.logradouro;
        this.respTecnicoSelecionado.bairro_localidade = resposta.bairro_localidade;
        this.respTecnicoSelecionado.cidade = resposta.cidade;
        this.respTecnicoSelecionado.estado = resposta.estado;
        this.respTecnicoSelecionado.cep = resposta.cep;
        this.respTecnicoSelecionado.email = resposta.email;
        this.respTecnicoSelecionado.telefone1 = resposta.telefone1;
        this.respTecnicoSelecionado.telefone2 = resposta.telefone2;
        this.respTecnicoSelecionado.crea = resposta.crea;
      })
  }

  getProdutorPorId(): void {
    this.servicoProdutor.getProdutorPorId(this.produtorSelecionado.id!).subscribe(
      (resposta) => {
        console.log(resposta);
        this.produtorSelecionado.id = resposta.id;
        this.produtorSelecionado.nome = resposta.nome;
        this.produtorSelecionado.logradouro = resposta.logradouro;
        this.produtorSelecionado.bairro_localidade = resposta.bairro_localidade;
        this.produtorSelecionado.cidade = resposta.cidade;
        this.produtorSelecionado.estado = resposta.estado;
        this.produtorSelecionado.cep = resposta.cep;
        this.produtorSelecionado.email = resposta.email;
        this.produtorSelecionado.telefone1 = resposta.telefone1;
        this.produtorSelecionado.telefone2 = resposta.telefone2;
      })
  }
  addPomar(): void {
    this.getAgronomoPorId();
    console.log(this.respTecnicoSelecionado);
    console.log(this.produtorSelecionado);
    console.log(this.pomar);
    this.addPomarProdutor();
  }
  addPomarProdutor(): void {
    this.servicoPomar.addPomar(this.pomar).subscribe(
      (resposta) => {
        this.rota.navigate(['pomarProdutor/'+this.produtorSelecionado.id!])
        this.servicoPomar.mensagem("Pomar cadastrado com sucesso");
      
      });
  }

}
