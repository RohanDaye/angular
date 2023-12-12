// app.component.ts

import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle$ = this.sharedService.pageTitle$;
  showSidebar = false;

  constructor(private sharedService: SharedService) {}

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
