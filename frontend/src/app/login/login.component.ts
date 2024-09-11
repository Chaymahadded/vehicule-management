import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Chauffeur } from './chauffeur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  chauffeur : Chauffeur = new Chauffeur();
  constructor(private loginService : LoginService,
    private router:Router) {}
  ngOnInit(): void{}
  connexion(){
    console.log(this.chauffeur);
    this.loginService.connexion(this.chauffeur).subscribe(data=>{
      this.goToListVehicule();
    },error=>alert("email ou mot de passe incorrect"));
    }
    goToListVehicule(){
      this.router.navigate(['/vehicules']);
    }

}
