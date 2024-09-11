import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiculeComponent } from './vehicule/list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './vehicule/add-vehicule/add-vehicule.component';
import { EditVehiculeComponent } from './vehicule/edit-vehicule/edit-vehicule.component';
import { DetailsVehiculeComponent } from './vehicule/details-vehicule/details-vehicule.component';
import { ListhistoriqueComponent } from './histCarb/listhistorique/listhistorique.component';
import { EdithistoriqueComponent } from './histCarb/edithistorique/edithistorique.component';
import { AddthistoriqueComponent } from './histCarb/addthistorique/addthistorique.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { DetailsServiceComponent } from './service/details-service/details-service.component';
import { ListrappelComponent } from './rappel/listrappel/listrappel.component';
import { AddrappelComponent } from './rappel/addrappel/addrappel.component';
import { EditrappelComponent } from './rappel/editrappel/editrappel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'vehicules',component: ListVehiculeComponent},
  {path:'ajouterVehicule',component : AddVehiculeComponent},
  {path:'editVehicule/:id',component: EditVehiculeComponent},
  {path:'vehicule/:id',component:DetailsVehiculeComponent},
  {path:'vehicule/:id/carburants',component:ListhistoriqueComponent},
  {path:'editCarburant/:id',component:EdithistoriqueComponent},
  {path:'vehicule/:id/ajouterCarburant',component:AddthistoriqueComponent},
  {path:'vehicule/:id/services',component:ListServiceComponent},
  {path:'editService/:id',component:EditServiceComponent},
  {path:'vehicule/:id/ajouterService',component:AddServiceComponent},
  {path:'service/:id',component:DetailsServiceComponent},
  {path:'service/:id/rappel',component:ListrappelComponent},
  {path:':id/ajouterRappel',component:AddrappelComponent},
  {path:'editRappel/:id',component:EditrappelComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
