import { Routes } from '@angular/router';
import { ProductsList } from './products-list/products-list';
import { ProductDetails } from './product-details/product-details';
import { Login } from './login/login';
import { Register } from './register/register';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login, title: 'Login' },
  { path: 'register', component: Register, title: 'Register' },

  { path: 'cart', component: Cart, title: 'Cart', canActivate: [authGuard] },

  { path: 'products', component: ProductsList, title: 'Products List', canActivate: [authGuard] },
  {
    path: 'product/:id',
    component: ProductDetails,
    title: 'Product Details',
    canActivate: [authGuard],
  },

  { path: '**', component: NotFound, title: 'Page Not Found' },
];
