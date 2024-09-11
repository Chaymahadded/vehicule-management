import { Component, OnInit } from '@angular/core';
import { ServiceEntretien } from '../service-entretien';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEntretienService } from '../service-entretien.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
  styleUrls: ['./details-service.component.css']
})
export class DetailsServiceComponent implements OnInit{
  id !: number;
  service ! : ServiceEntretien;

  constructor(private route : ActivatedRoute,
    private serEntSer : ServiceEntretienService,
    private router : Router,
    public authService: LoginService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service= new ServiceEntretien();
    this.serEntSer.getServiceById(this.id).subscribe(data=>{
      this.service=data;
    })


  }
  rappel(){
    this.router.navigate(['service', this.id, 'rappel']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
