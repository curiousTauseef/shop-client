import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { Socket } from 'ngx-socket-io';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shop';
  cartItems: number;

  searchTerm = '';
  isCollapsed = true;
  loggedUser: any;

  constructor(
    private profileService: ProfileService,
    private socket: Socket,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.getProfile();
    this.cartItems = this.orderService.getCart().length;
    this.socket.on('refreshPage', () => {
      this.getProfile();
      this.cartItems = this.orderService.getCart().length;
    });
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
    this.orderService.cartItems = 0;
  }

  search() {}
}
