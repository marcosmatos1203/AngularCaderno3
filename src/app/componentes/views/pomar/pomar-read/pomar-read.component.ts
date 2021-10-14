
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

  produtor:ProdutorModel={
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
  pomares:PomarModel[]=[];
idParametro:number=0;
  displayedColumns: string[] = ['id', 'nome', 'bairro_localidade', 'cidade',  'acoes'];

  constructor(private servicoProdutor: ProdutorService, private servicoPomar: PomarService, private lblRota: ActivatedRoute, private rota: Router) { }

  ngOnInit(): void {
    this.idParametro = parseInt(this.lblRota.snapshot.paramMap.get('id')!);
    this.getProdutor();
    this.getPomaresPorProdutor();
  }
  getProdutor() {
    this.servicoProdutor.getProdutorPorId(this.idParametro).subscribe(
      retorno => {
        console.log(retorno);
        this.produtor = retorno;
      })
  }
  getPomaresPorProdutor() {
    this.servicoPomar.getPomaresPorIdProdutor(this.idParametro).subscribe(
      retorno => {
        console.log(retorno);
        this.pomares = retorno;
      })
  }
  NavegarNovoPomar() {
    this.rota.navigate(["pomar/create/"+this.produtor.id])
  }
}
