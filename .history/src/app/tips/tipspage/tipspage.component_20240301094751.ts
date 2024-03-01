import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipspage',
  templateUrl: './tipspage.component.html',
  styleUrls: ['./tipspage.component.css']
})
export class TipspageComponent {
  constructor(private router: Router) { }

  navigateToSettingUpItineraries() {
    this.router.navigate(['/some-path']);
  }

  navigateToLearningLanguages() {
    this.router.navigate(['/tips/learning-languages']);
    console.log('Navigating to learning languages');
  }
  
  navigateToEatingHealthy() {
    this.router.navigate(['/tips/eating-healthy']);
    console.log('Navigating to eating healthy');
  }

  navigateToWorkingOutWhileAbroad() {
    this.router.navigate(['/tips/working-out-while-abroad']);
    console.log('Navigating to working out while abroad');
  }
}
