import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturePageComponent } from './picture-page/picture-page.component';
import { SharedModule } from '../shared/shared.module';
import { PicturesDetailPageComponent } from './pictures-detail-page/pictures-detail-page.component';

const routes: Routes = [
  { path: '', component: PicturePageComponent }
];

@NgModule({
  declarations: [PicturePageComponent, PicturesDetailPageComponent], // Declare the component here
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PicturesRoutingModule { }
