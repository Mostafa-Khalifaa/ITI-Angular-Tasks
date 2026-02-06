import { Component, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartItems: Signal<any[]>;
  isLoggedIn: Signal<boolean>;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.cartItems = this.cartService.cartt;
    this.isLoggedIn = this.authService.isLogin;
  }

  getTotalQuantity() {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
