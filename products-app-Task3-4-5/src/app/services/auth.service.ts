import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = signal<boolean>(false);

  private users: any[] = [];

  constructor(private router: Router) {
    if (typeof localStorage !== 'undefined') {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) {
        this.users = JSON.parse(savedUsers);
      }
      const wasLoggedIn = localStorage.getItem('isLoggedIn');
      if (wasLoggedIn === 'true') {
        this.isLogin.set(true);
      }
    }
  }

  register(userData: any) {
    this.users.push(userData);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);

    if (user) {
      this.isLogin.set(true);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
      }
      return true;
    }
    return false;
  }

  logout() {
    this.isLogin.set(false);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'false');
    }
    this.router.navigate(['/login']);
  }
}
