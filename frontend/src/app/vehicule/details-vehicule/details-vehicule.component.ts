import { Component ,OnInit} from '@angular/core';
import { Vehicule } from '../vehicule';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeserviceService } from '../vehiculeservice.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-details-vehicule',
  templateUrl: './details-vehicule.component.html',
  styleUrls: ['./details-vehicule.component.css']
})
export class DetailsVehiculeComponent implements OnInit {
  id !: number;
  vehicule ! : Vehicule;

  constructor(private route : ActivatedRoute,
    private vehiculeService : VehiculeserviceService,
    private router : Router,
    public authService:LoginService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vehicule= new Vehicule();
    this.vehiculeService.getVehiculeById(this.id).subscribe(data=>{
      this.vehicule=data;
    })


  }
  histCarb(){
    this.router.navigate(['vehicule', this.id, 'carburants']);
      
  }
  serviceList(){
    this.router.navigate(['vehicule', this.id, 'services']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }


}
