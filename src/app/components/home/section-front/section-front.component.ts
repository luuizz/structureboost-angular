import { Component } from '@angular/core';
import { GridContainerComponent } from '../../grid-container/grid-container.component';
import { CardFeaturesComponent } from './card-features/card-features.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-front',
  standalone: true,
  imports: [GridContainerComponent, CardFeaturesComponent, CommonModule],
  templateUrl: './section-front.component.html',
  styleUrl: './section-front.component.scss'
})
export class SectionFrontComponent {
  cardFront = [
    {
      tagSpan: 'FUNDAMENTOS',
      title: 'HTML5 e Semântica',
      description: 'Aprenda a usar a mais recente versão do HTML e crie páginas web bem estruturadas e otimizadas para os mecanismos de busca.'
    },
    {
      tagSpan: 'ESTILIZANDO',
      title: 'CSS3 e Estilização Avançada',
      description: 'Explore os recursos avançados do CSS3 para criar layouts responsivos, animações incríveis e designs atrativos.'
    },
    {
      tagSpan: 'POTENCIALIZANDO',
      title: 'Javascript Moderno',
      description: 'Aprenda a programar com Javascript moderno e torne suas páginas interativas e dinâmicas, proporcionando uma experiência única.'
    },
    {
      tagSpan: 'APLICAÇÕES',
      title: 'Frameworks Front-end',
      description: 'Descubra como utilizar frameworks populares como React, Angular e Vue.js para criar aplicações web completas e eficientes.'
    },
    {
      tagSpan: 'DESIGNS',
      title: 'Design Responsivo',
      description: 'Aprenda a criar designs responsivos e mobile-first que se adaptam perfeitamente a diferentes tamanhos de tela.'
    },
  ]
}
