import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home'
      },
      {
        label: 'Blog',
        routerLink: '/blog'
      },
      {
        label: 'My Story',
        routerLink: '/mystory'
      },
      {
        label: 'Tips',
        routerLink: '/tips'
      },
      {
        label: 'Pictures',
        routerLink: '/pictures'
      },
      {
        label: 'Contact Me',
        routerLink: '/contact'
      }
    ];
  }
}
