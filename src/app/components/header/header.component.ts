import { Component } from '@angular/core';
import { GridContainerComponent } from '../grid-container/grid-container.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnComponent } from '../global/btn/btn.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GridContainerComponent, NgOptimizedImage, BtnComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navigationItems = [
    { title: 'Home', link: '/' },
    { title: 'Diferenciais', link: '#diferenciais' },
    { title: 'Galeria', link: '#galeria' },
  ]
}
