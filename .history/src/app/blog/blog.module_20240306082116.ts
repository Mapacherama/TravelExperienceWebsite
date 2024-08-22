import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { BrandenburgGateBlogPostComponent } from './brandenburg-gate-blog-post/brandenburg-gate-blog-post.component';

const routes: Routes = [
  { path: '', component: BlogpageComponent },
  { path: 'brandenburg-gate', component: BrandenburgGateBlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    BrandenburgGateBlogPostComponent
  ]
})
export class BlogRoutingModule { }
