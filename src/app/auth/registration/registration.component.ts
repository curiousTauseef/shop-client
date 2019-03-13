import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formData: any = {};
  errorMessage: string;
  showSpinner = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.formData = {};
    this.errorMessage = '';
  }

  register() {
    this.authService.register(this.formData).subscribe(data => {
      if (data.success === true) {
        localStorage.setItem('token', data.token);
        this.router.navigate(['']);
      } else {
        console.log(data.message);
      }
    });
  }

  checkPasswords(password, confirmPassword) {
    if (confirmPassword.length < 0) {
      return null;
    }

    if (password.value !== confirmPassword.value) {
      return {
        doesNotMatch: true
      };
    }
  }
}
