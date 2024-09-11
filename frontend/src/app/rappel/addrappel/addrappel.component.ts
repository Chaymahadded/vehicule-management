import { Component, OnInit } from '@angular/core';
import { Rappel } from '../rappel';
import { ActivatedRoute, Router } from '@angular/router';
import { RappelService } from '../rappel.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-addrappel',
  templateUrl: './addrappel.component.html',
  styleUrls: ['./addrappel.component.css']
})
export class AddrappelComponent implements OnInit{
  r: Rappel = new Rappel();
  id!:number;
  constructor(private rappelSer: RappelService, private router: Router,
    private activeRouter : ActivatedRoute,
    public authService:LoginService) {}
  ngOnInit(): void {
    
  }
  addRappel(){
    this.id = this.activeRouter.snapshot.params['id'];
    this.rappelSer.addRappel(this.id,this.r).subscribe(data=>{
      this.goToListRappel();
    }
    );
  }
  goToListRappel(){
    this.id = this.activeRouter.snapshot.params['id'];
    this.router.navigate(['service',this.id, 'rappel']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
