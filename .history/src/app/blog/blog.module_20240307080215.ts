import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { BrandenburgGateBlogPostComponent } from './brandenburg-gate-blog-post/brandenburg-gate-blog-post.component';
import { SamuraiMuseumBlogPostComponent } from './samurai-museum-blog-post/samurai-museum-blog-post.component';

const routes: Routes = [
  { path: '', component: BlogpageComponent },
  { path: 'brandenburg-gate', component: BrandenburgGateBlogPostComponent },
  { path: 'samurai-museum', component: SamuraiMuseumBlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    BrandenburgGateBlogPostComponent,
    SamuraiMuseumBlogPostComponent
  ]
})
export class BlogRoutingModule { }
