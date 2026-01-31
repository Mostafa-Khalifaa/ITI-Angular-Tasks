import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html'
})
export class SkillsComponent {
  skillsTitle = 'Skills';
  skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'Javascript', level: '80%' },
    { name: 'Tailwind', level: '85%' },
    { name: 'React', level: '70%' },
    { name: 'Github', level: '90%' }
  ];
}
