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
  me = null;
  title = 'Management Page';
  siteName = "Disaster Relief Page";
  lastUpdated = "";

  // Activation attributes
  boolContacts = 1
  boolAdvisories = 1
  boolLocations = 1
  boolPrecaution = 1;
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
  contacts = [];
  locations = [];
  advisories = [];
  precautions = [];
  survivors = [];

  ngOnInit(){
    this.appService.getState().subscribe(data => {
      this.me = data;
      this.boolAdvisories = this.me.boolAdvisories;
      this.boolSurvivors = this.me.boolSurvivors;
      this.boolContacts = this.me.boolContacts;
      this.boolLocations = this.me.boolLocations;
      this.boolPrecaution = this.me.boolPrecautions;
      this.precautions = JSON.parse(this.me.precautions);
      this.advisories = JSON.parse(this.me.advisories);
      this.locations = JSON.parse(this.me.locations);
      this.contacts = JSON.parse(this.me.contacts);
      this.survivors = JSON.parse(this.me.survivors);
      this.siteName = this.me.siteName;
      this.lastUpdated = this.me.lastUpdate;
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
    if(this.advisories.length > 0)
    {
      this.advisories.push({msg: "|| " + this.advisoryMsgVal })
    }
    else 
    {
      this.advisories.push({ msg: this.advisoryMsgVal });
    }
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
    if(this.boolPrecaution == 1){
      this.boolPrecaution = 0;
    }else{
      this.boolPrecaution = 1;
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
                                 "boolPrecautions":this.boolPrecaution,
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
