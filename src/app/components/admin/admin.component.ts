import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent {

  constructor(private route: ActivatedRoute) {}
  title = 'Management Page';

  // Contact attributes
  nameVal = "";
  emailVal ="";
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

  sendBoundVariables(){
    console.log(this.locations);
    console.log(this.contacts);
    console.log(this.advisories);
  }
}

/*
*todo:
*check boxes that make text boxes clickable 
*entire webpage
*/
