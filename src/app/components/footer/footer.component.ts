import { Component } from '@angular/core';
import { GridContainerComponent } from '../grid-container/grid-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GridContainerComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  listFooter = [
    {
      title: 'Lista de páginas',
      links: [
        {
          name: 'Home',
        },
        {
          name: 'Diferenciais',
        },
        {
          name: 'Galeria',
        },
      ]
    },
    {
      title: 'Soluções',
      links: [
        {
          name: 'Texto link 01',
        },
        {
          name: 'Texto link 01',
        },
        {
          name: 'Texto link 01',
        },
      ]
    },
    {
      title: 'Contato',
      links: [
        {
          name: 'Texto link 01',
        },
        {
          name: 'Texto link 01',
        }
      ]
    }
  ]
  listSocials = [
    {
      title: 'Nossas redes sociais',
      socials: [
        {
          srcImg: 'assets/icon-instagram.svg',
          nameSocial: 'Instagram'
        },
        {
          srcImg: 'assets/icon-linkedin.svg',
          nameSocial: 'LinkedIn'
        },
        {
          srcImg: 'assets/icon-youtube.svg',
          nameSocial: 'Youtube'
        }
      ]
    }
  ]
}
