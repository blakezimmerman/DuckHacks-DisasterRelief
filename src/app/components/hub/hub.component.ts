import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hub',
  templateUrl: 'hub.component.html',
  styleUrls: ['hub.component.css']
})

export class HubComponent {
  
  constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  boolAdvisories = 1;
  boolSurvivors = 1;
  boolContacts = 1;
  boolLocations = 1;

  title = 'Disaster Info Page';
  advisories = [{"msg":"Travel ban in Hoboken"},{"msg":"State of Emergency in effect"}];
  locations = [{"name":"Hoboken Terminal","address":"1 Hudson Pl Hoboken NJ","desc": "Primary rail/subway station for Hoboken"},
               {"name":"City Hall","address":"94 Washington St Hoboken NJ", "desc":"Emergency Operations stationed in conference room here"}]
  googleMapsLinks = ["https://www.google.com/maps/embed/v1/place?key=AIzaSyBGEAV3IlhXjIP7CW0MdhB1-h0NYXga8ic&q=94+Washington+Street+Hoboken+NJ",
                     "https://www.google.com/maps/embed/v1/place?key=AIzaSyBGEAV3IlhXjIP7CW0MdhB1-h0NYXga8ic&q=1+Hudson+Place+Hoboken+NJ"]
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
