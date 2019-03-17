import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  formData: any;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this.profileService.getProfile().subscribe(
      data => {
        this.formData = data.user.address;
        console.log(this.formData);
      },
      err => console.log(err)
    );
  }
}
