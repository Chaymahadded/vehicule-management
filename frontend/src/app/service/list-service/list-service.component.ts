import { Component, OnInit } from '@angular/core';
import { ServiceEntretienService } from '../service-entretien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEntretien } from '../service-entretien';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit{
  constructor(private serEntSer : ServiceEntretienService,
    private router : Router,
    private route : ActivatedRoute,
    public authService:LoginService) {}
    id!:number;
  services : ServiceEntretien[]=[];
  service = new ServiceEntretien();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serEntSer.getALlService(this.id).subscribe(data=>{this.services=data;})
  }
  updateService(id:number){
    this.router.navigate(["/editService",id]);

  }
  aadService(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['vehicule', this.id, 'ajouterService']);
  }
  private getALlService(){
    this.id = this.route.snapshot.params['id'];
    this.serEntSer.getALlService(this.id).subscribe(data => {
      this.services = data;
    });
  }
  deleteService(id: number){
    this.serEntSer.deleteService(id).subscribe( data => {
      console.log(data);
      this.getALlService();
    })
  }
  detailService(id:number){
    this.router.navigate(["/service",id]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
