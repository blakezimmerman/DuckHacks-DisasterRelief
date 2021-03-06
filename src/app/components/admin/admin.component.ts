import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from "../../app.service";

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent {

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {}

  // Misc attributes
  state = null;
  title = 'Management Page';
  siteName = "Disaster Relief Page";
  lastUpdated = "";

  // Activation attributes
  boolSummary = 1
  boolContacts = 1
  boolAdvisories = 1
  boolLocations = 1
  boolPrecautions = 1;
  boolSurvivors = 1;

  // Survivor attributes
  survFirstVal = "";
  survLastVal = "";
  survMidVal = "";

  // Precaution attributes
  precautionVal = "";

  // Contact attributes
  nameVal = "";
  emailVal = "";
  phoneNumVal = "";

  // Location attributes
  locNameVal = "";
  locAddressVal = "";
  locDescVal = "";

  // Advisory attributes
  advisoryMsgVal = "";

  // Entity arrays
  summary = [];
  contacts = [];
  locations = [];
  advisories = [];
  precautions = [];
  survivors = [];

  ngOnInit(){
    this.appService.getState().subscribe(data => {
      this.state = data;
      //this.boolSummary = this.state.boolSummary;
      this.boolContacts = this.state.boolContacts;
      this.boolAdvisories = this.state.boolAdvisories;
      this.boolLocations = this.state.boolLocations;
      this.boolPrecautions = this.state.boolPrecautions;
      this.boolSurvivors = this.state.boolSurvivors;
      //this.summary = JSON.parse(this.state.summary);
      this.contacts = JSON.parse(this.state.contacts);
      this.advisories = JSON.parse(this.state.advisories);
      this.locations = JSON.parse(this.state.locations);
      this.precautions = JSON.parse(this.state.precautions);
      this.survivors = JSON.parse(this.state.survivors);
      this.siteName = this.state.siteName;
      this.lastUpdated = this.state.lastUpdate;
    })
  }

  addContact(){
    this.contacts.push({ name: this.nameVal,
                         phone: this.phoneNumVal,
                         email: this.emailVal });
    this.nameVal = "";
    this.emailVal = "";
    this.phoneNumVal = "";
  }

  removeContact(contact){
    let x = this.contacts.indexOf(contact);
    this.contacts.splice(x, x+1);
  }

  addSurvivor(){
    this.survivors.push({ firstName: this.survFirstVal,
                          midInit: this.survMidVal,
                          lastName: this.survLastVal });
    this.survFirstVal = "";
    this.survLastVal = "";
    this.survMidVal = "";
  }

  removeSurvivor(surv){
    let x = this.survivors.indexOf(surv);
    this.survivors.splice(x, x+1);
  }

  addPrecaution(){
    this.precautions.push({ desc: this.precautionVal });
    this.precautionVal = "";
  }

  removePrecaution(precaution){
    let x = this.precautions.indexOf(precaution);
    this.precautions.splice(x,x+1);
  }

  addLocation(){
    this.locations.push({ address: this.locAddressVal,
                          desc: this.locDescVal,
                          name: this.locNameVal });
    this.locNameVal = "";
    this.locAddressVal = "";
    this.locDescVal = "";
  }

  removeLocation(location){
    let x = this.locations.indexOf(location);
    this.locations.splice(x, x+1);
  }

  addAdvisory(){
    
    this.advisories.push({ msg: this.advisoryMsgVal });
    
    this.advisoryMsgVal = "";
  }

  removeAdvisory(advisory){
    let x = this.advisories.indexOf(advisory)
    this.advisories.splice(x, x+1);
  }

  toggleLocations(){
    if(this.boolLocations == 1){
      this.boolLocations = 0;
    }else{
      this.boolLocations = 1;
    }
  }

  toggleSurvivors(){
    if(this.boolSurvivors == 1){
      this.boolSurvivors = 0;
    }else{
      this.boolSurvivors = 1;
    }
  }

  toggleContacts(){
    if(this.boolContacts == 1){
      this.boolContacts = 0;
    }else{
      this.boolContacts = 1;
    }
  }

  togglePrecaution(){
    if(this.boolPrecautions == 1){
      this.boolPrecautions = 0;
    }else{
      this.boolPrecautions = 1;
    }
  }

  toggleAdvisories(){
    if(this.boolAdvisories == 1){
      this.boolAdvisories = 0;
    }else{
      this.boolAdvisories = 1;
    }
  }

  sendBoundVariables(){
    this.appService.updateState({"locations":JSON.stringify(this.locations),
                                 "contacts":JSON.stringify(this.contacts),
                                 "advisories":JSON.stringify(this.advisories),
                                 "precautions":JSON.stringify(this.precautions),
                                 "survivors":JSON.stringify(this.survivors),
                                 "boolContacts":this.boolContacts,
                                 "boolLocations":this.boolLocations,
                                 "boolAdvisories":this.boolAdvisories,
                                 "boolPrecautions":this.boolPrecautions,
                                 "boolSurvivors":this.boolSurvivors,
                                 "siteName":this.siteName,
                                 "lastUpdate":new Date()})
  }

  goBack() {
     this.router.navigate(["/"]);
  }
}

/*
*todo:
*check boxes that make text boxes clickable 
*entire webpage
*/
