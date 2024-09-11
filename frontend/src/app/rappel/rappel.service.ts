import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rappel } from './rappel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RappelService {

  baseURL = "http://localhost:9000"
  constructor(private httpClient : HttpClient) { }
  addRappel(id: number, rappel: Rappel){
    console.log(rappel);
    return this.httpClient.post<any>(`${this.baseURL}/${id}/ajouterRappel`, rappel);
  }
  getALlRappel(id :number) : Observable<Rappel[]>{
    return this.httpClient.get<Rappel[]>(`${this.baseURL}/service/${id}/rappel`);
  }
  updateRappel(id: number, rappel: Rappel): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/editRappel/${id}`, rappel);
  }
  getRappelbById(id: number): Observable<Rappel> {
    return this.httpClient.get<Rappel>(`${this.baseURL}/rappel/${id}`);
  }
  deleteRappel(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/supprimerRappel/${id}`);
  }
}
