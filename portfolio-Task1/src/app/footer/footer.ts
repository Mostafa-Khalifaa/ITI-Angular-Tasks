import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  email = 'mostafa.khalifa.2000.mk@gmail.com';
  MESSAGE = 'Feel free to reach out to me any time.';
  sent_message = 'Send Message';
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Mostafa-Khalifaa' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mostafa-khalifa-213a4b294/' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/profile.php?id=100014229732938' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/MostafaKhalifa2000' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/mostafa_khalifa_2000/' },
    { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@MostafaKhalifa2000' }
  ];
}
