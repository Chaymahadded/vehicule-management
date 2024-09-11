import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEntretienService } from '../service-entretien.service';
import { ServiceEntretien } from '../service-entretien';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit{
  constructor(private activeRouter : ActivatedRoute,
    private serEntSer : ServiceEntretienService,
    public authService : LoginService,
    private router:Router) {}
    id!: number;
    service: ServiceEntretien = new ServiceEntretien(); 
    ngOnInit(): void {
      this.id = this.activeRouter.snapshot.params['id'];
      console.log(this.id);
      this.serEntSer.getServiceById(this.id).subscribe(data => {
        this.service = data; 
        console.log(this.service);
      });
    }
    updateService(){
      this.serEntSer.updateService(this.id, this.service).subscribe( data =>{
        this.goToService();
      }
      , error => console.log(error));
    }
  
    goToService(){
      this.router.navigate(["vehicules"]);

    }
    logout() {
      this.authService.logout();
      this.router.navigate(['/']);
    }

}
