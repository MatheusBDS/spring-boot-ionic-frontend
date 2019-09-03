import { CategotiaDTO } from './../../models/categoria.dto';
import { API_CONFIG } from './../../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaService{

  constructor(public http: HttpClient){}

  findAll() : Observable<CategotiaDTO[]> {
    return this.http.get<CategotiaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
  }

}
