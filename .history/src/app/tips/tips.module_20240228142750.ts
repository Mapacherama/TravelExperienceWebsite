import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipspageComponent } from './tipspage/tipspage.component';
import { LearningLanguagesComponent } from './learning-languages/learning-languages.component';

const routes: Routes = [
  { path: '', component: TipspageComponent },
  { path: '/learning-languages', component: LearningLanguagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    LearningLanguagesComponent
  ]
})
export class TipsRoutingModule { }
