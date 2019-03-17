import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loggedUser: any;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe(data => {
      this.loggedUser = data.user;
    });
  }
}
