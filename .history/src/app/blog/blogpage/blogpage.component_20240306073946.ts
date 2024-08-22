import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent {
  constructor(private router: Router) { }
  navigateToBrandenBurgerTor() {
    this.router.navigate(['/blog/brandenburg-gate']);
    console.log('Navigating to Brandenburg Gate');
  }
}
