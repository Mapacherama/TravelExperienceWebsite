import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipspageComponent } from './tipspage/tipspage.component';
import { LearningLanguagesComponent } from './learning-languages/learning-languages.component';
import { EatingHealthyComponent } from './eating-healthy/eating-healthy.component';
import { WorkingOutWhileAbroadComponent } from './working-out-while-abroad/working-out-while-abroad.component';

const routes: Routes = [
  { path: '', component: TipspageComponent },
  { path: 'learning-languages', component: LearningLanguagesComponent },
  { path: 'eating-healthy', component: EatingHealthyComponent },
  { path: 'working-out-while-abroad', component: WorkingOutWhileAbroadComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    LearningLanguagesComponent,
    EatingHealthyComponent,
    WorkingOutWhileAbroadComponent
  ]
})
export class TipsRoutingModule { }
