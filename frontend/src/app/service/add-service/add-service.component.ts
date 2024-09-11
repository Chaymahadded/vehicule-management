import { Component ,OnInit} from '@angular/core';
import { ServiceEntretien } from '../service-entretien';
import { ServiceEntretienService } from '../service-entretien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit{
  service: ServiceEntretien = new ServiceEntretien();
  id!:number;
  constructor(private serEntSer: ServiceEntretienService, private router: Router,
    private activeRouter : ActivatedRoute,
    public authService:LoginService) {}
  ngOnInit(): void {
    
  }
  addService(){
    this.id = this.activeRouter.snapshot.params['id'];
    this.serEntSer.addService(this.id,this.service).subscribe(data=>{
      this.goToListService();
    }
    );
  }
  goToListService(){
    this.id = this.activeRouter.snapshot.params['id'];
    this.router.navigate(['vehicule', this.id, 'services']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
