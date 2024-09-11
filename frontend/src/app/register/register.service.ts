import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chauffeur } from './chauffeur';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  baseURL = "http://localhost:9000"
  constructor(private httpClient : HttpClient) { }
  register(chauffeur: Chauffeur): Observable<any> {
    console.log(chauffeur);
    return this.httpClient.post<any>(this.baseURL + "/register", chauffeur);
}
}
