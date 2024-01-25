import { Component } from '@angular/core';
import { GridContainerComponent } from '../../grid-container/grid-container.component';
import { BtnComponent } from '../../global/btn/btn.component';

@Component({
  selector: 'app-section-cta',
  standalone: true,
  imports: [GridContainerComponent, BtnComponent],
  templateUrl: './section-cta.component.html',
  styleUrl: './section-cta.component.scss'
})
export class SectionCtaComponent {

}
