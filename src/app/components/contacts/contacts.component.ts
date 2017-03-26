import { Component, Input } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})

export class ContactsComponent {
  @Input() contacts: Object;
}
