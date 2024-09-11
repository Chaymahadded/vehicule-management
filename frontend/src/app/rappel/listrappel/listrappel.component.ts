import { Component, OnInit } from '@angular/core';
import { Rappel } from '../rappel';
import { ActivatedRoute, Router } from '@angular/router';
import { RappelService } from '../rappel.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-listrappel',
  templateUrl: './listrappel.component.html',
  styleUrls: ['./listrappel.component.css']
})
export class ListrappelComponent implements OnInit{
  constructor(private rappelSer : RappelService,
    private router : Router,
    private route : ActivatedRoute,
    public authService : LoginService) {}
    id!:number;
  rappel : Rappel[]=[];
  r = new Rappel();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rappelSer.getALlRappel(this.id).subscribe(data=>{this.rappel=data;})
  }
  updateRappel(id:number){
    this.router.navigate(["/editRappel",id]);

  }
  aadRappel(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate([this.id, 'ajouterRappel']);
  }
  private getALlRappel(){
    this.id = this.route.snapshot.params['id'];
    this.rappelSer.getALlRappel(this.id).subscribe(data => {
      this.rappel = data;
    });
  }
  deleteRappel(id: number){
    this.rappelSer.deleteRappel(id).subscribe( data => {
      console.log(data);
      this.getALlRappel();
    })
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
