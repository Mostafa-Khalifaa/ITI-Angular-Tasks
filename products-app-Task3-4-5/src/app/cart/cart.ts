import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
})
export class Cart {
  items: Signal<any[]>;

  constructor(
    public cartService: CartService,
  ) {
    this.items = this.cartService.cartt;
  }

  getTotal() {
    return this.cartService.getTotalPrice();
  }

  clear() {
    this.cartService.clearCart();
  }
}
