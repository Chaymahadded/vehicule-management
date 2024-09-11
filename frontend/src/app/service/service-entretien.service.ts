import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceEntretien } from './service-entretien';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEntretienService {

  baseURL = "http://localhost:9000"
  constructor(private httpClient : HttpClient) { }
  addService(id: number, serEnt: ServiceEntretien){
    console.log(serEnt);
    return this.httpClient.post<any>(`${this.baseURL}/vehicule/${id}/ajouterService`, serEnt);
  }
  getALlService(id :number) : Observable<ServiceEntretien[]>{
    return this.httpClient.get<ServiceEntretien[]>(`${this.baseURL}/vehicule/${id}/services`);
  }
  updateService(id: number, serEnt: ServiceEntretien): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/editService/${id}`, serEnt);
  }
  getServiceById(id: number): Observable<ServiceEntretien> {
    return this.httpClient.get<ServiceEntretien>(`${this.baseURL}/service/${id}`);
  }
  deleteService(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/supprimerService/${id}`);
  }
}
