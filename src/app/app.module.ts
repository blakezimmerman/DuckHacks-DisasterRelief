import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppService } from "./app.service";

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HubComponent } from './components/hub/hub.component';

import { SummaryComponent } from './components/summary/summary.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AdvisoriesComponent } from './components/advisories/advisories.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PrecautionsComponent } from './components/precautions/precautions.component';
import { SurvivorsComponent } from './components/survivors/survivors.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HubComponent,
    SummaryComponent,
    ContactsComponent,
    AdvisoriesComponent,
    LocationsComponent,
    PrecautionsComponent,
    SurvivorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
