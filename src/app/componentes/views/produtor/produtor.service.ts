import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutorModel } from './produtor.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.UrlBase;

  getProdutores(): Observable<ProdutorModel[]> {
    const url=`${this.baseUrl}produtores`
    return this.http.get<ProdutorModel[]>(url)
  }

}

