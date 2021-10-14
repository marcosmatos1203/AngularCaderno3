import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutorModel } from '../produtor/produtor.model';
import { PomarModel } from './pomar.model';

@Injectable({
  providedIn: 'root'
})
export class PomarService {

  constructor(private http: HttpClient, private snack: MatSnackBar) { }
  baseUrl : string = environment.UrlBase;

  getProdutores():Observable<ProdutorModel[]>{
    const url = `${this.baseUrl}produtores`
    return this.http.get<ProdutorModel[]>(url);
  }
  getPomares():Observable<PomarModel[]>{
    const url = `${this.baseUrl}pomar`
    return this.http.get<PomarModel[]>(url);
  }
  getPomaresPorIdProdutor(idProdutor: number):Observable<PomarModel[]>{
    const url = `${this.baseUrl}pomar?produtor=${idProdutor}`
    return this.http.get<PomarModel[]>(url);
  }
  getPomarPorId(id: number): Observable<PomarModel> {
    const url = `${this.baseUrl}pomar/${id}`
    return this.http.get<PomarModel>(url)
  }
  addPomar(pomar: PomarModel): Observable<PomarModel> {
    const url = `${this.baseUrl}pomar`
    return this.http.post<PomarModel>(url, pomar);
  }
  deletePomar(id: number): Observable<void> {
    const url = `${this.baseUrl}pomar/${id}`
    return this.http.delete<void>(url);
  }
  updatePomar(produtor:PomarModel): Observable<void> {
    const url = `${this.baseUrl}pomar/${produtor.IDPomar}`
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
