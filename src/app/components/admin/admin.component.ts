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
  sendBoundVariables()
  {
    console.log(this.nameVal);
    console.log(this.contactInfoTitle);
  }
}

/*
*todo:
*check boxes that make text boxes clickable
*submit button at the very bottom that serializes the 
*entire webpage
*/
