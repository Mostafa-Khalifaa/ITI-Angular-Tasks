import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio.html'
})
export class BioComponent {
  title = 'Experience & Education';
  subtitle = 'My professional journey and academic background.';
  
      title1= 'Front-End Developer';
      place1= 'Trainee at ITI';
      description1= 'I learned track open source in ITI and I learned web development in ITI.';
      period1= '2025 - Present';
    
      title2= 'Computer Science';
      place2 ='University of Computer Science and AI';
      description2= 'Graduated with GPA 3.6 with specialization in computer science.';
      period2= '2020 - 2025';
    }
  