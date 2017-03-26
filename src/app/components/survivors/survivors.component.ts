import { Component, Input } from '@angular/core';

@Component({
  selector: 'survivors',
  templateUrl: 'survivors.component.html',
  styleUrls: ['survivors.component.css']
})

export class SurvivorsComponent {
  @Input() survivors: Object;
}
