import { Component,OnInit } from '@angular/core';
import { HistoriqueCarburant } from '../historique-carburant';
import { HistCarbService } from '../hist-carb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-addthistorique',
  templateUrl: './addthistorique.component.html',
  styleUrls: ['./addthistorique.component.css']
})
export class AddthistoriqueComponent implements OnInit {
  hist: HistoriqueCarburant = new HistoriqueCarburant();
  id!:number;
  constructor(private histCarbSer: HistCarbService, private router: Router,
    private activeRouter : ActivatedRoute,
    public authService:LoginService) {}
  ngOnInit(): void {
    
  }
  addCarb(){
    this.id = this.activeRouter.snapshot.params['id'];
    this.histCarbSer.addCarb(this.id,this.hist).subscribe(data=>{
      this.goToListHist();
    }
    );
  }
  goToListHist(){
    this.id = this.activeRouter.snapshot.params['id'];
    this.router.navigate(['vehicule', this.id, 'carburants']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
