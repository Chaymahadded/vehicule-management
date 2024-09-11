import { Component, OnInit } from '@angular/core';
import { HistoriqueCarburant } from '../historique-carburant';
import { ActivatedRoute, Router } from '@angular/router';
import { HistCarbService } from '../hist-carb.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-edithistorique',
  templateUrl: './edithistorique.component.html',
  styleUrls: ['./edithistorique.component.css']
})
export class EdithistoriqueComponent implements OnInit{
  constructor(private activeRouter : ActivatedRoute,
    private histCarbSer : HistCarbService,
    private router:Router,
    public authService:LoginService) {}
    id!: number;
    hist: HistoriqueCarburant = new HistoriqueCarburant(); 
    ngOnInit(): void {
      this.id = this.activeRouter.snapshot.params['id'];
      console.log(this.id);
      this.histCarbSer.getCarbById(this.id).subscribe(data => {
        this.hist = data; 
        console.log(this.hist);
      });
    }
    updateHist(){
      this.histCarbSer.updateHistCarb(this.id, this.hist).subscribe( data =>{
        this.goToHistCarb();
      }
      , error => console.log(error));
    }
  
    goToHistCarb(){
      this.router.navigate(["vehicules"]);

    }
    logout() {
      this.authService.logout();
      this.router.navigate(['/']);
    }

}
