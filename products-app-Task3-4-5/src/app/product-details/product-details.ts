import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../products';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
})
export class ProductDetails {
  productData: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    public cartService: CartService,
    private productsService: ProductsService,
    private cdr: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      const id = this.route.snapshot.params['id'];

      this.productsService.getProductById(Number(id)).subscribe((product: any) => {
        this.productData = product;
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
