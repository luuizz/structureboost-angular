import { Component } from '@angular/core';
import { GridContainerComponent } from '../../grid-container/grid-container.component';
import { BtnComponent } from '../../global/btn/btn.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [GridContainerComponent, BtnComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
