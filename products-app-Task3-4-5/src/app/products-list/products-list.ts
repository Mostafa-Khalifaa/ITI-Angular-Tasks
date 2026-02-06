import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../products';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.html',
})
export class ProductsList {
  products: Product[] = [];

  constructor(
    public cartService: CartService,
    private productsService: ProductsService,
    private cdr: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.productsService.getProducts().subscribe((response: any) => {
        this.products = response.products;
        this.cdr.detectChanges();
      });
    });
  }

  addToCart(product: Product) {
    if (product.stock > 0) {
      product.stock--;
      this.cartService.addToCart(product);
    }
  }
}
