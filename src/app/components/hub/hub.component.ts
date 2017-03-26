import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'hub',
  templateUrl: 'hub.component.html',
  styleUrls: ['hub.component.css']
})

export class HubComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  boolAdvisories = 1;
  boolSurvivors = 1;
  boolContacts = 1;

  title = 'Disaster Info Page';
  advisories = [{"msg":"Travel ban in Hoboken"},{"msg":"State of Emergency in effect"}];
  contacts = [{"name":"NJ OEM Lead","phone":"610-999-8789","email":"cbluk@memes.edu"},
              {"name":"Nigel Thornberry","phone":"911-341-6229","email":"eme@gmail.com"}];
  survivors = [{"firstName":"Matt","lastName":"Beans","midInit":"Y"},
               {"firstName":"Kelsey","lastName":"Julier","midInit":"P"}]
  siteName = "Hoboken's Hurricane Memey Page"
  lastUpdate = "03/26/2017 @ 05:57 EST"    

  loadAdmin() {
     this.router.navigate(["/admin"]);
  }
}
