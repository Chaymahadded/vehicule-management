import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVehiculeComponent } from './vehicule/list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './vehicule/add-vehicule/add-vehicule.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditVehiculeComponent } from './vehicule/edit-vehicule/edit-vehicule.component';
import { DetailsVehiculeComponent } from './vehicule/details-vehicule/details-vehicule.component';
import { ListhistoriqueComponent } from './histCarb/listhistorique/listhistorique.component';
import { EdithistoriqueComponent } from './histCarb/edithistorique/edithistorique.component';
import { AddthistoriqueComponent } from './histCarb/addthistorique/addthistorique.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { DetailsServiceComponent } from './service/details-service/details-service.component';
import { ListrappelComponent } from './rappel/listrappel/listrappel.component';
import { AddrappelComponent } from './rappel/addrappel/addrappel.component';
import { EditrappelComponent } from './rappel/editrappel/editrappel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListVehiculeComponent,
    AddVehiculeComponent,
    EditVehiculeComponent,
    DetailsVehiculeComponent,
    ListhistoriqueComponent,
    EdithistoriqueComponent,
    AddthistoriqueComponent,
    ListServiceComponent,
    AddServiceComponent,
    EditServiceComponent,
    DetailsServiceComponent,
    ListrappelComponent,
    AddrappelComponent,
    EditrappelComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
