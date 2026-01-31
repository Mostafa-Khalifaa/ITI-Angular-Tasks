import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { HeroComponent } from './hero/hero';
import { BioComponent } from './bio/bio';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    BioComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Mostafa Khalifa Portfolio');
}
