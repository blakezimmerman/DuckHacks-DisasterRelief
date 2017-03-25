import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent {
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
