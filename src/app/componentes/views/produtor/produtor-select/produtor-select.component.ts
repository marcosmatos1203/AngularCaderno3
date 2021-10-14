import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutorModel } from '../produtor.model';
import { ProdutorService } from '../produtor.service';

@Component({
  selector: 'app-produtor-select',
  templateUrl: './produtor-select.component.html',
  styleUrls: ['./produtor-select.component.css']
})
export class ProdutorSelectComponent implements OnInit {

  produtores: ProdutorModel[] = [];

  options: ProdutorModel[] = [];

  displayedColumns: string[] = ['id', 'nome', 'bairro_localidade', 'telefone2', 'acoes'];
  constructor(private servico: ProdutorService, private rota: Router) { }

  ngOnInit(): void {
    this.getProdutores();
   
  }
  getProdutores() {
    this.servico.getProdutores().subscribe(
      retorno => {
        this.produtores = retorno;
      })
  }
  NavegarNovoProdutor() {
    this.rota.navigate(["produtor/create"])
  }
}
