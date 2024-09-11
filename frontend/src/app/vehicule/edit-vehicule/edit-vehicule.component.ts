import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeserviceService } from '../vehiculeservice.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-edit-vehicule',
  templateUrl: './edit-vehicule.component.html',
  styleUrls: ['./edit-vehicule.component.css']
})
export class EditVehiculeComponent implements OnInit{
  constructor(private activeRouter : ActivatedRoute,
    private vehiculeService : VehiculeserviceService,
    public authService:LoginService,
    private router:Router) {}
    id!: number;
    vehicule: Vehicule = new Vehicule(); 
    ngOnInit(): void {
      this.id = this.activeRouter.snapshot.params['id'];
      console.log(this.id);
      this.vehiculeService.getVehiculeById(this.id).subscribe(data => {
        this.vehicule = data; 
        console.log(this.vehicule);
      });
    }
    onSubmit(){
      this.vehiculeService.updateVehicule(this.id, this.vehicule).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
    }
  
    goToEmployeeList(){
      this.router.navigate(['/vehicules']);
    }
    logout() {
      this.authService.logout();
      this.router.navigate(['/']);
    }

}
