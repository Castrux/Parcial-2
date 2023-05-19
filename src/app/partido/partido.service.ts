import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from './partido';

import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl = environment.partidoUrl;

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<Partido[]> {
    return this.http.get<Partido[]>(this.apiUrl);
  }

}
