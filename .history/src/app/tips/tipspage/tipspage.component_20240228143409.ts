import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipspage',
  templateUrl: './tipspage.component.html',
  styleUrls: ['./tipspage.component.css']
})
export class TipspageComponent {
  constructor(private router: Router) { }

  navigateToLearningLanguages() {
    this.router.navigate(['/tips/learning-languages']);
  }
}
