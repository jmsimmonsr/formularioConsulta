import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SERVICIO , RESULTADO_BUSQUEDA } from '../modelos/modelos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetCatalogoConcurso():Observable<SERVICIO>{
    const url='https://serviciosguatecomprasqa.minfin.gob.gt/api/Catalogos/GetCatalogoConcurso';
    return this.http.get<SERVICIO>(url);
  }

  GetBusquedaConcursos(json : any):Observable<RESULTADO_BUSQUEDA>{
    const url ='https://serviciosguatecomprasqa.minfin.gob.gt/api/Concurso/GetBusquedaConcursos';
    return this.http.post<RESULTADO_BUSQUEDA>(url,json);

  }
}
