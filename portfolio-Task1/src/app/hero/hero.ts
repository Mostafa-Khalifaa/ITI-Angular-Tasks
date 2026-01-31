import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html'
})
export class HeroComponent {
  firstName = 'Mostafa';
  lastName = 'Khalifa';
  jobTitle = 'Web Developer';
  description = 'Computer Science & Artificial Intelligence graduate student at ITI.';
  profileImage = 'profile.png';
  cvLink = 'profile.pdf';
}
