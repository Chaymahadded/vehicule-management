import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculeserviceService } from '../vehiculeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {
  constructor(private vehiculeService : VehiculeserviceService,
    private route:ActivatedRoute,
    private router:Router,
    public authService:LoginService
    ) {}
  vehicules : Vehicule[]=[];
  vehicule = new Vehicule();
  id!:number;
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.vehiculeService.getALlVehicule(this.id).subscribe(data=>{this.vehicules=data;})
  }
  private getAllVehicule(){
    this.vehiculeService.getALlVehicule(this.id).subscribe(data => {
      this.vehicules = data;
    });
  }
  aadVehicule(){
    this.router.navigate(["/ajouterVehicule"]);
  }
  updateVehicule(id:number){
    this.router.navigate(["/editVehicule",id]);

  }
  deleteVehicule(id: number){
    this.vehiculeService.deleteVehicule(id).subscribe( data => {
      console.log(data);
      this.getAllVehicule();
    })
  }
  detailVehicule(id:number){
    this.router.navigate(["/vehicule",id]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
