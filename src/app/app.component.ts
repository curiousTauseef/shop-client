import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shop';

  searchTerm = '';
  isCollapsed = true;
  loggedUser: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getProfile();
  }

  get token() {
    return localStorage.getItem('token');
  }

  getProfile() {
    if (localStorage.getItem('token')) {
      this.profileService.getProfile().subscribe(data => {
        this.loggedUser = data.user;
      });
    }
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.loggedUser = {};
    localStorage.removeItem('token');
  }

  search() {}
}
