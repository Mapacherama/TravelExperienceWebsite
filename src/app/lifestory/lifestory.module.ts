import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MystorypageComponent } from './mystorypage/mystorypage.component';

const routes: Routes = [
  { path: '', component: MystorypageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
