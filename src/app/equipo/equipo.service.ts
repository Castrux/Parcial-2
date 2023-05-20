import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

private apiUrl = environment.equipoUrl;

constructor(private http: HttpClient) { }

getEquipos(): Observable<Equipo[]> {
  return this.http.get<Equipo[]>(this.apiUrl);
}

}
