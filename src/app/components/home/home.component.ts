import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SectionDigitalComponent } from './section-digital/section-digital.component';
import { SectionFrontComponent } from './section-front/section-front.component';
import { SectionCtaComponent } from './section-cta/section-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, SectionDigitalComponent, SectionFrontComponent, SectionCtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
