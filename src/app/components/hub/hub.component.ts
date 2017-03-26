import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from "../../app.service";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { AdvisoriesComponent } from "../advisories/advisories.component";

declare var moment: any;

@Component({
  selector: 'hub',
  templateUrl: 'hub.component.html',
  styleUrls: ['hub.component.css']
})

export class HubComponent {
  
  constructor(private http: Http, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer, private appService: AppService) {}
  state = null;
  boolSummary = null;
  boolContacts = null;
  boolAdvisories = null;
  boolLocations = null;
  boolPrecautions = null;
  boolSurvivors = null;
  summary = null;
  contacts = null;
  advisories = null;
  precautions = null;
  locations = null;
  survivors = null;
  siteName = null;
  lastUpdate = null; 
  
  ngOnInit() {
    this.appService.getState().subscribe(data => {
      this.state = data;
      //this.boolSummary = this.state.boolSummary;
      this.boolContacts = this.state.boolContacts;
      this.boolAdvisories = this.state.boolAdvisories;
      this.boolSurvivors = this.state.boolSurvivors;
      this.boolContacts = this.state.boolContacts;
      this.boolLocations = this.state.boolLocations;
      this.boolPrecautions = this.state.boolPrecautions;
      //this.summary = JSON.parse(this.state.summary);
      this.contacts = JSON.parse(this.state.contacts);
      this.advisories = JSON.parse(this.state.advisories);
      if(this.advisories.length > 0)
      {
        for(let i = 1; i < this.advisories.length; i++)
        {
          console.log(this.advisories[i]);
          this.advisories[i].msg = "|| " + this.advisories[i].msg;
          console.log(this.advisories[i]);
        }
      }
      this.precautions = JSON.parse(this.state.precautions);
      this.locations = JSON.parse(this.state.locations);
      this.survivors = JSON.parse(this.state.survivors);
      this.siteName = this.state.siteName;
      this.lastUpdate = moment(this.state.lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss A ZZ");
    })
  }

  loadAdmin() {
     this.router.navigate(["/admin"]);
  }
}
