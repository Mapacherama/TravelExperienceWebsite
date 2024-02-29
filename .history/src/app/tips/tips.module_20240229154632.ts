import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipspageComponent } from './tipspage/tipspage.component';
import { LearningLanguagesComponent } from './learning-languages/learning-languages.component';
import { EatingHealthyComponent } from './eating-healthy/eating-healthy.component';

const routes: Routes = [
  { path: '', component: TipspageComponent },
  { path: 'learning-languages', component: LearningLanguagesComponent },
  { path: 'eating-healthy', component: EatingHealthyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    LearningLanguagesComponent,
    EatingHealthyComponent
  ]
})
export class TipsRoutingModule { }
