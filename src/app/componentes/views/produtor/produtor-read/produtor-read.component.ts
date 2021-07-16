import { Component, OnInit } from '@angular/core';
import { ProdutorModel } from '../produtor.model';
import { ProdutorService } from '../produtor.service';

@Component({
  selector: 'app-produtor-read',
  templateUrl: './produtor-read.component.html',
  styleUrls: ['./produtor-read.component.css']
})
export class ProdutorReadComponent implements OnInit {
  produtores:ProdutorModel[]=[]

  displayedColumns: string[] = ['id', 'nome', 'bairro_localidade', 'telefone2', 'acoes'];

  constructor(private servico: ProdutorService) { }

  ngOnInit(): void {
    this.getProdutores()
  }
  getProdutores(){
    this.servico.getProdutores().subscribe(retorno=>{ 
      console.log(retorno);
      this.produtores = retorno;
    })
  }
}
