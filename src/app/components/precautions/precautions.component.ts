import { Component, Input } from '@angular/core';

@Component({
  selector: 'precautions',
  templateUrl: 'precautions.component.html',
  styleUrls: ['precautions.component.css']
})

export class PrecautionsComponent {
  @Input() precautions: Object;
}
