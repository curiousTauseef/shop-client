import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: any = {};
  showSpinner = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private socket: Socket
  ) {}

  ngOnInit() {
    this.formData = {};
  }

  login() {
    this.authService.login(this.formData).subscribe(
      data => {
        if (data.success === true) {
          this.socket.emit('refresh', {});
          localStorage.setItem('token', data.token);
          this.showSpinner = true;
          this.router.navigate(['']);
        } else {
          console.log(data.message);
        }
      },
      err => console.log(err)
    );
  }
}
