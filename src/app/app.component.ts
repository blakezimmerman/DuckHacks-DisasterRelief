import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
}
