import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent {

  constructor(private route: ActivatedRoute) {}

  title = 'Admin Page!';
  contactInfoTitle = "Contact Info";
  nameVal = "";
  emailVal ="";
  phoneNumVal = "";
  addressVal = "";
  addressDescVal = "";
  contacts = [];
  locations = [];
  addContact()
  {
    this.contacts.push({name: this.nameVal, phone: this.phoneNumVal, email: this.emailVal});
    this.nameVal = "";
    this.emailVal = "";
    this.phoneNumVal = "";
  }
  addLocation() 
  {
    this.locations.push({address: this.addressVal, desc: this.addressDescVal});
    this.addressVal = "";
    this.addressDescVal = "";
  }
  sendBoundVariables()
  {
    console.log(this.nameVal);
    console.log(this.contactInfoTitle);
    console.log(this.contacts);
  }
}

/*
*todo:
*check boxes that make text boxes clickable 
*entire webpage
*/
