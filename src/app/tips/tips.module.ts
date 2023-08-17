import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipspageComponent } from './tipspage/tipspage.component';

const routes: Routes = [
  { path: '', component: TipspageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }
