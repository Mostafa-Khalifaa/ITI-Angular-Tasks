import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  projectsTitle = 'Featured Projects';
  view = 'View on Github →';


  projects = [
    {
      title: 'Qaraa Newspaper',
      description: 'Delivering news with a user-friendly interface. It offers visually engaging layouts and easy navigation.',
      link: 'https://github.com/Mostafa-Khalifaa/Qaraa-newspaper',
      image: 'project-1.jpeg'
    },
    {
      title: 'ICPC Pharos Community',
      description: 'ICPC training and registration, tailored for aspiring programmers.',
      link: 'https://github.com/Mostafa-Khalifaa/ICPC-Pharos-Community',
      image: 'project-2.jpeg'
    }
  ];
}
