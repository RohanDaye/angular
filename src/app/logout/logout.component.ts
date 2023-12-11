import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-logout',
  template: `
    <div class="logout-container">
      <p class="logout-text">Here you can logout from Baap</p>
      <button (click)="logout()" class="logout-button">Logout</button>
    </div>
  `,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private sharedService: SharedService) {}

  logout(): void {
    const confirmLogout = confirm('Are you sure you want to logout?');

    if (confirmLogout) {
      // Perform logout logic here
      // For example, you can navigate to the login page or clear authentication state
      alert('Logout successful!');
    } else {
      // User clicked "No", do nothing or handle accordingly
    }
  }

  ngOnInit(): void {
    this.sharedService.setPageTitle('Logout');
  }
}
