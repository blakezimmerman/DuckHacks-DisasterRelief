import { Component, Input } from '@angular/core';

@Component({
  selector: 'locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css']
})

export class LocationsComponent {
  @Input() locations: Object;
}
