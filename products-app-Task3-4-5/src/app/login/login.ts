import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  submitLogin(form: any) {
    if (form.valid) {
      const { email, password } = form.value;
      const success = this.authService.login(email, password);

      if (success) {
        alert('Login Successful!');
        this.router.navigate(['/products']);
      } else {
        alert('Invalid Email or Password!');
      }
    }
  }
}
