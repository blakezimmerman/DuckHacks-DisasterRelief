import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'hub',
  templateUrl: 'hub.component.html',
  styleUrls: ['hub.component.css']
})
export class HubComponent {
  
  constructor(private route: ActivatedRoute) {}

  title = 'Disaster Info Page';
}
