import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgronomoModel } from '../agronomo.model';
import { AgronomoService } from '../agronomo.service';

@Component({
  selector: 'app-agronomo-create',
  templateUrl: './agronomo-create.component.html',
  styleUrls: ['./agronomo-create.component.css']
})
export class AgronomoCreateComponent implements OnInit {
agronomo:AgronomoModel={
  nome: "",
  logradouro: "",
  bairro_localidade: "",
  cidade: "",
  estado: "",
  cep: "",
  email: "",
  telefone1: "",
  telefone2: "",
  crea:""
}
  constructor(private servico: AgronomoService, private rota:Router) { }

  ngOnInit(): void {
  }
  addAgronomo(): void {
    this.servico.addAgronomo(this.agronomo).subscribe(
      (resposta) => {
        this.rota.navigate(['responsavelTecnico']);
        this.servico.mensagem("Responsável Técnico cadastrado com sucesso");
        console.log(resposta);
      });
  }
}
