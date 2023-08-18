import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturePageComponent } from './picture-page/picture-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: PicturePageComponent }
];

@NgModule({
  declarations: [PicturePageComponent], // Declare the component here
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PicturesRoutingModule { }
