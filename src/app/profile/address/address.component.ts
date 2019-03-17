import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  formData: any;
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this.profileService.getProfile().subscribe(
      data => {
        this.formData = data.user.address;
      },
      err => console.log(err)
    );
  }

  updateAddress() {
    this.profileService.updateAddress(this.formData).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 500);
      },
      err => console.log(err)
    );
  }
}
