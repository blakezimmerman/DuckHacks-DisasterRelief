import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from "../../app.service";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { AdvisoriesComponent } from "../advisories/advisories.component";

@Component({
  selector: 'hub',
  templateUrl: 'hub.component.html',
  styleUrls: ['hub.component.css']
})

export class HubComponent {
  
  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer, private appService: AppService) {}
  me = null;
  boolAdvisories = null;
  boolSurvivors = null;
  boolContacts = null;
  boolLocations = null;
  boolPrecautions = null;
  precautions = null;
  title = null;
  advisories = null;
  locations = null;
  googleMapsLinks = null;
  contacts = null;
  survivors = null;
  siteName = null;
  lastUpdate = null; 
  
  ngOnInit() {
    this.appService.getState().subscribe(data => {
      this.me = data;
      //this.furtherTesting = data.lastUpdate;
      console.log(this.me.lastUpdate);
      this.boolAdvisories = this.me.boolAdvisories;
      this.boolSurvivors = this.me.boolSurvivors;
      this.boolContacts = this.me.boolContacts;
      this.boolLocations = this.me.boolLocations;
      this.boolPrecautions = this.me.boolPrecautions;
      this.precautions = JSON.parse(this.me.precautions);
      this.advisories = JSON.parse(this.me.advisories);
      this.precautions = JSON.parse(this.me.precautions);
      this.locations = JSON.parse(this.me.locations);
      this.contacts = JSON.parse(this.me.contacts);
      this.survivors = JSON.parse(this.me.survivors);
      this.siteName = this.me.siteName;
      this.lastUpdate = this.me.lastUpdate;
    })
  }

  loadAdmin() {
     this.router.navigate(["/admin"]);
  }
}
