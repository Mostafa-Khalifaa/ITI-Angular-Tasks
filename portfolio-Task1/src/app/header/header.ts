import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html'
})
export class HeaderComponent {
  logoText = 'MK';
  navLinks = [
    { label: 'Home', url: '#hero' },
    { label: 'Bio', url: '#bio' },
    { label: 'Skills', url: '#skills' },
    { label: 'Projects', url: '#projects' },
    { label: 'Contact', url: '#contact' }
  ];
}
