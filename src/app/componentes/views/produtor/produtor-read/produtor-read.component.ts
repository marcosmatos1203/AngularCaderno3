import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtor-read',
  templateUrl: './produtor-read.component.html',
  styleUrls: ['./produtor-read.component.css']
})
export class ProdutorReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'nome', 'bairro_localidade', 'telefone2', 'acoes'];
}
