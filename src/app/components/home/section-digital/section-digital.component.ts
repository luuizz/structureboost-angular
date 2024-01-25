import { Component } from '@angular/core';
import { GridContainerComponent } from '../../grid-container/grid-container.component';
import { ItemDigitalComponent } from './item-digital/item-digital.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-digital',
  standalone: true,
  imports: [GridContainerComponent, ItemDigitalComponent, CommonModule],
  templateUrl: './section-digital.component.html',
  styleUrl: './section-digital.component.scss'
})
export class SectionDigitalComponent {
  digitalItems = [
    {
      iconSrc: './assets/icon-faceid.svg',
      title: 'Impacto Visual Imbatível',
      description: 'Domine a arte de criar interfaces envolventes que conquistam corações e mentes dos usuários.',
      alt: 'Ícone do FaceID'
    },
    {
      iconSrc: './assets/icon-devices.svg',
      title: 'Navegabilidade sem Limites',
      description: 'Construa a base sólida para uma experiência de usuário fluida e intuitiva, garantindo a satisfação do público.',
      alt: 'Ícone de vários dispositivos'
    },
    {
      iconSrc: './assets/icon-performance.svg',
      title: 'Performance Acelerada',
      description: 'O Front End é a chave para otimizar o desempenho do seu site, cativando visitantes com velocidade e eficiência.',
      alt: 'Ícone de performance'
    },
  ]
}
