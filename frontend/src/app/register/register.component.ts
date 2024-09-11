import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Chauffeur } from './chauffeur';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  chauffeur:Chauffeur =new Chauffeur();
  constructor(private registreService : RegisterService,private router: Router) {}
  ngOnInit(): void{}
  registre(){
    console.log(this.chauffeur);
    this.registreService.register(this.chauffeur).subscribe(data=>{
      this.goToConnexion();
  })
}
  goToConnexion(){
    this.router.navigate(['/login']);
  }

}
