import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AppService } from "../../app.service";

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent {

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  // Misc attributes
  title = 'Management Page';

  // Activation attributes
  boolContacts = 1
  boolAdvisories = 1
  boolLocations = 1

  // Contact attributes
  nameVal = "";
  emailVal = "";
  phoneNumVal = "";

  // Location attributes
  locNameVal = "";
  locAddressVal = "";
  locDescVal = "";

  // Advisory attributes
  advisoryDescVal = "";

  // Entity arrays
  contacts = [];
  locations = [];
  advisories = [];

  addContact(){
    this.contacts.push({ name: this.nameVal,
                         phone: this.phoneNumVal,
                         email: this.emailVal });
    this.nameVal = "";
    this.emailVal = "";
    this.phoneNumVal = "";
  }

  removeContact(contact){
    let x = this.contacts.indexOf(contact)
    this.contacts.splice(x, x+1);
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
    let x = this.locations.indexOf(location)
    this.locations.splice(x, x+1);
  }

  addAdvisory(){
    this.advisories.push({ desc: this.advisoryDescVal });
    this.advisoryDescVal = "";
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

  toggleContacts(){
    if(this.boolContacts == 1){
      this.boolContacts = 0;
    }else{
      this.boolContacts = 1;
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
    console.log(this.locations);
    console.log(this.contacts);
    console.log(this.advisories);

    this.appService.updateState({"address":"test","desc":"test","name":"test","phone":"test","email":"test"}) //hardcode test for now
  }
}

/*
*todo:
*check boxes that make text boxes clickable 
*entire webpage
*/
