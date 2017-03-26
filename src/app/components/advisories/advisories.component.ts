import { Component, Input } from '@angular/core';

@Component({
  selector: 'advisories',
  templateUrl: 'advisories.component.html',
  styleUrls: ['advisories.component.css']
})

export class AdvisoriesComponent {
  @Input() advisories: Object;
}
