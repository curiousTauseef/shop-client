import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: any = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.formData = {};
  }

  login() {
    this.authService.login(this.formData).subscribe(
      data => {
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          this.profileService.getProfile();
          this.router.navigate(['']);
        } else {
          console.log(data.message);
        }
      },
      err => console.log(err)
    );
  }
}
