import { Component, OnInit } from '@angular/core';
import { HistCarbService } from '../hist-carb.service';

import { HistoriqueCarburant } from '../historique-carburant';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-listhistorique',
  templateUrl: './listhistorique.component.html',
  styleUrls: ['./listhistorique.component.css']
})
export class ListhistoriqueComponent implements OnInit {
  constructor(private histCarbSer : HistCarbService,
    private router : Router,
    private route : ActivatedRoute,
    public authService: LoginService) {}
    id!:number;
  hist : HistoriqueCarburant[]=[];
  histCarb = new HistoriqueCarburant();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.histCarbSer.getALlHistCarb(this.id).subscribe(data=>{this.hist=data;})
  }
  updataHist(id:number){
    this.router.navigate(["/editCarburant",id]);

  }
  aadHist(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['vehicule', this.id, 'ajouterCarburant']);
  }
  private getALlHistCarb(){
    this.id = this.route.snapshot.params['id'];
    this.histCarbSer.getALlHistCarb(this.id).subscribe(data => {
      this.hist = data;
    });
  }
  deleteHist(id: number){
    this.histCarbSer.deleteCarb(id).subscribe( data => {
      console.log(data);
      this.getALlHistCarb();
    })
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
