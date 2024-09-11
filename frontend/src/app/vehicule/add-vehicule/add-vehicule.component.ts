import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculeserviceService } from '../vehiculeservice.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit{
  vehicule: Vehicule = new Vehicule();
  constructor(private vehiculeService: VehiculeserviceService, private router: Router,
    public authService:LoginService) {}
  ngOnInit(): void {
    
  }
  addVehicule(){
    this.vehiculeService.addVehicule(this.vehicule).subscribe(data=>{
      this.goToListVehicule();
    }
    );
  }
  goToListVehicule(){
    this.router.navigate(['/vehicules']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
