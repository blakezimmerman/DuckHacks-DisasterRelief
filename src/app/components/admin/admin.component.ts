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

  addLocation(){
    this.locations.push({ address: this.locAddressVal,
                          desc: this.locDescVal,
                          name: this.locNameVal });
    this.locNameVal = "";
    this.locAddressVal = "";
    this.locDescVal = "";
  }

  addAdvisory(){
    this.advisories.push({ desc: this.advisoryDescVal });
    this.advisoryDescVal = "";
  }

  sendBoundVariables(){
    console.log(this.nameVal);
    console.log(this.contacts);
  }
}

/*
*todo:
*check boxes that make text boxes clickable 
*entire webpage
*/
