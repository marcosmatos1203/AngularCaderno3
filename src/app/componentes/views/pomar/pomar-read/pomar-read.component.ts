
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutorModel } from '../../produtor/produtor.model';
import { ProdutorService } from '../../produtor/produtor.service';
import { PomarModel } from '../pomar.model';
import { PomarService } from '../pomar.service';

@Component({
  selector: 'app-pomar-read',
  templateUrl: './pomar-read.component.html',
  styleUrls: ['./pomar-read.component.css']
})
export class PomarReadComponent implements OnInit {
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
  pomar: PomarModel = {
    IDPomar: 0,
    nome: "",
    logradouro: "",
    bairro_localidade: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone2: "",
  }

  pomares:PomarModel[]=[];
  displayedColumns: string[] = ['id', 'nome', 'bairro_localidade', 'cidade', 'respTecnico', 'acoes'];

  constructor(private servicoProdutor: ProdutorService, private servicoPomar: PomarService, private lblRota: ActivatedRoute, private rota: Router) { }

  ngOnInit(): void {
    this.produtor.IDProdutor = parseInt(this.lblRota.snapshot.paramMap.get('id')!);
    this.getPomarPorIdProdutor();
  }
  getProdutores() {
    this.servicoProdutor.getProdutores().subscribe(
      retorno => {
        this.pomares = retorno;
      })
  }
  getPomarPorIdProdutor() {
    this.servicoProdutor.getPomarPorIdProdutor(this.produtor.IDProdutor!).subscribe(
      resposta => {

        this.pomar.IDPomar = resposta.IDPomar;
        this.pomar.nome = resposta.nome;
        this.pomar.logradouro = resposta.logradouro;
        this.pomar.bairro_localidade = resposta.bairro_localidade;
        this.pomar.cidade = resposta.cidade;
        this.pomar.estado = resposta.estado;
        this.pomar.cep = resposta.cep;
        this.pomar.telefone2 = resposta.telefone2;


        this.pomar = resposta;
      })
  }

  NavegarNovoPomar() {
    this.rota.navigate(["pomar/create"])
  }
}
