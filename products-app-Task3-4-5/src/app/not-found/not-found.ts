import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container text-center mt-5">
      <h1 class="text-danger">404</h1>
      <h2>Page Not Found</h2>
      <a routerLink="/products" class="btn btn-primary mt-3">Go Home</a>
    </div>
  `
})
export class NotFound {}