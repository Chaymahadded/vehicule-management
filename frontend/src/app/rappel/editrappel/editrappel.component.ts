import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RappelService } from '../rappel.service';
import { Rappel } from '../rappel';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-editrappel',
  templateUrl: './editrappel.component.html',
  styleUrls: ['./editrappel.component.css']
})
export class EditrappelComponent implements OnInit{
  constructor(private activeRouter : ActivatedRoute,
    private rappelSer : RappelService,
    private router:Router,
    public authService:LoginService) {}
    id!: number;
    r: Rappel = new Rappel(); 
    ngOnInit(): void {
      this.id = this.activeRouter.snapshot.params['id'];
      console.log(this.id);
      this.rappelSer.getRappelbById(this.id).subscribe(data => {
        this.r = data; 
        console.log(this.r);
      });
    }
    updateRappel(){
      this.rappelSer.updateRappel(this.id, this.r).subscribe( data =>{
        this.goToListRappel();
      }
      , error => console.log(error));
    }
  
    goToListRappel(){
      this.router.navigate(["vehicules"]);

    }
    logout() {
      this.authService.logout();
      this.router.navigate(['/']);
    }

}
