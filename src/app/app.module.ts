import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HubComponent } from './components/hub/hub.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
