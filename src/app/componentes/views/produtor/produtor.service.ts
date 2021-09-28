import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PomarModel } from '../pomar/pomar.model';
import { ProdutorModel } from './produtor.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  constructor(private http: HttpClient, private snack: MatSnackBar) { }
  baseUrl: string = environment.UrlBase;

  getProdutores(): Observable<ProdutorModel[]> {
    const url = `${this.baseUrl}produtores`
    return this.http.get<ProdutorModel[]>(url)
  }
  getProdutorPorId(id: number): Observable<ProdutorModel> {
    const url = `${this.baseUrl}produtores/${id}`
    return this.http.get<ProdutorModel>(url)
  }
  getPomarPorIdProdutor(id: number): Observable<PomarModel[]> {
    const url = `${this.baseUrl}produtores/${id}`
    return this.http.get<PomarModel[]>(url)
  }
  addProdutor(produtor: ProdutorModel): Observable<ProdutorModel> {
    const url = `${this.baseUrl}produtores`
    return this.http.post<ProdutorModel>(url, produtor);
  }
  deleteProdutor(id: number): Observable<void> {
    const url = `${this.baseUrl}produtores/${id}`
    return this.http.delete<void>(url);
  }
  updateProdutor(produtor:ProdutorModel): Observable<void> {
    const url = `${this.baseUrl}produtores/${produtor.IDProdutor}`
    return this.http.patch<void>(url,produtor);
  }
  mensagem(str: string): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}

