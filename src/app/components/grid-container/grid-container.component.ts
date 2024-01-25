import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss'
})
export class GridContainerComponent {
  @Input() containerStyles: { [key: string]: string } = {};
}
