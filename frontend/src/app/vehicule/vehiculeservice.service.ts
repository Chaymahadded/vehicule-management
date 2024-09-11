import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from './vehicule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeserviceService {


  baseURL = "http://localhost:9000"
  constructor(private httpClient : HttpClient) { }
  addVehicule(vehicule : Vehicule){
    console.log(vehicule);
    return this.httpClient.post<any>(`${this.baseURL}/ajouterVehicule`, vehicule);
  }
  getALlVehicule(id:number) : Observable<Vehicule[]>{
    return this.httpClient.get<Vehicule[]>(`${this.baseURL}/vehicules`);
  }
  getVehiculeById(id: number): Observable<Vehicule> {
    return this.httpClient.get<Vehicule>(`${this.baseURL}/vehicule/${id}`);
  }
  
  
  updateVehicule(id: number, vehicule: Vehicule): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/editVehicule/${id}`, vehicule);
  }
  
  
  deleteVehicule(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/supprimerVehicule/${id}`);
  }
  
}
