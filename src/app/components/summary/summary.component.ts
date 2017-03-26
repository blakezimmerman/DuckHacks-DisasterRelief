import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['summary.component.css']
})

export class SummaryComponent {
  @Input() summary: Object;
}
