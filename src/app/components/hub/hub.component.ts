import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'hub',
  templateUrl: 'hub.component.html',
  styleUrls: ['hub.component.css']
})
export class HubComponent {
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  title = 'Disaster Info Page';

  loadAdmin() {
     this.router.navigate(["/admin"]);
  }
}
