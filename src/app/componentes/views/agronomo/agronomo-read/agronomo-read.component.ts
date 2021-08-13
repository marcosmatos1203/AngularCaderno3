import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgronomoModel } from '../agronomo.model';
import { AgronomoService } from '../agronomo.service';

@Component({
  selector: 'app-agronomo-read',
  templateUrl: './agronomo-read.component.html',
  styleUrls: ['./agronomo-read.component.css']
})
export class AgronomoReadComponent implements OnInit {
  agronomos: AgronomoModel[] = [];

  displayedColumns: string[] = ['id', 'nome', 'bairro_localidade', 'telefone2', 'acoes'];

  constructor(private servico: AgronomoService, private rota: Router) { }

  ngOnInit(): void {
    this.getAgronomos();
  }

  getAgronomos() {
    this.servico.getAgronomos().subscribe(
      retorno => {
        this.agronomos = retorno;
      })
  }
  NavegarNovoAgronomo() {
    this.rota.navigate(["responsavelTecnico/create"])
  }
}
