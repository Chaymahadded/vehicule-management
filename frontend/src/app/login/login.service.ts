import { Injectable } from '@angular/core';
import { Chauffeur } from './chauffeur';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated=false;
  baseURL = "http://localhost:9000"
  constructor(private httpClient : HttpClient,
    private router:Router) { }
  connexion(chauffeur: Chauffeur): Observable<Object> {
    console.log(chauffeur);
    this.isAuthenticated=true;
    return this.httpClient.post<any>(this.baseURL + "/login", chauffeur);
}
logout() {
  this.isAuthenticated = false;
  this.router.navigate(['/']);
}

isLoggedIn() {
  return this.isAuthenticated;
}
}
