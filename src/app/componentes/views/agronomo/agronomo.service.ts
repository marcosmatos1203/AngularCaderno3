import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgronomoModel } from './agronomo.model';

@Injectable({
  providedIn: 'root'
})
export class AgronomoService {

  constructor(private http: HttpClient, private snack:MatSnackBar) { }
  baseUrl: string = environment.UrlBase;

  getAgronomos(): Observable<AgronomoModel[]> {
    const url = `${this.baseUrl}resp-tecnico`;
    return this.http.get<AgronomoModel[]>(url);
  }
  addAgronomo(agronomo: AgronomoModel): Observable<AgronomoModel> {
    const url = `${this.baseUrl}resp-tecnico`
    return this.http.post<AgronomoModel>(url, agronomo);
  }
  mensagem(str: string): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
