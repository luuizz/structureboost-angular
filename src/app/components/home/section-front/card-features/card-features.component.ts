import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-features.component.html',
  styleUrl: './card-features.component.scss'
})
export class CardFeaturesComponent {
  @Input() tag!: string;
  @Input() title!: string;
  @Input() description!: string;
}
