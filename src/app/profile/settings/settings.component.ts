import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  formData: any;
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe(
      data => {
        this.formData = data.user;
      },
      err => console.log(err)
    );
  }

  updateProfile() {
    this.profileService.updateSettings(this.formData).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 500);
      },
      err => console.log(err)
    );
  }
}
