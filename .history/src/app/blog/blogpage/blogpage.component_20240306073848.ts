import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent {
  constructor(private router: Router) { }
  navigateToWorkingOutWhileAbroad() {
    this.router.navigate(['/tips/working-out-while-abroad']);
    console.log('Navigating to working out while abroad');
  }
}
