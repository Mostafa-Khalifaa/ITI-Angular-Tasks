import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<any[]>([]);

  cartt = this.cart;

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('cart');
      if (saved) {
        this.cart.set(JSON.parse(saved));
      }
    }
  }

  private saveCart() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.cart()));
    }
  }

  getCartItems() {
    return this.cart;
  }
  clearCart() {
    this.cart.set([]);
    this.saveCart();
  }

  addToCart(product: any) {
    const items = [...this.cart()];

    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }

    this.cart.set(items);
    this.saveCart();
    alert('Product added to cart!');
  }

  removeFromCart(id: number) {
    const items = this.cart().filter((item) => item.id !== id);
    this.cart.set(items);
    this.saveCart();
  }

  getTotalPrice(): number {
    return this.cart().reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
