import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-digital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-digital.component.html',
  styleUrl: './item-digital.component.scss'
})
export class ItemDigitalComponent {
  @Input()
  iconSrc!: string;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  altText!: string;
}
