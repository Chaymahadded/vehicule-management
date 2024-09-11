import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriqueCarburant } from './historique-carburant';


@Injectable({
  providedIn: 'root'
})
export class HistCarbService {

  baseURL = "http://localhost:9000"
  constructor(private httpClient : HttpClient) { }
  addCarb(id: number, histCarb: HistoriqueCarburant){
    console.log(histCarb);
    return this.httpClient.post<any>(`${this.baseURL}/vehicule/${id}/ajouterCarburant`, histCarb);
  }
  getALlHistCarb(id :number) : Observable<HistoriqueCarburant[]>{
    return this.httpClient.get<HistoriqueCarburant[]>(`${this.baseURL}/vehicule/${id}/carburants`);
  }
  updateHistCarb(id: number, histCarb: HistoriqueCarburant): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/editCarburant/${id}`, histCarb);
  }
  getCarbById(id: number): Observable<HistoriqueCarburant> {
    return this.httpClient.get<HistoriqueCarburant>(`${this.baseURL}/carburant/${id}`);
  }
  deleteCarb(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/supprimerCarburant/${id}`);
  }

}
