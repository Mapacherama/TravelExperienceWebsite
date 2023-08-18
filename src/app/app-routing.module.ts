import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Setting up lazy routing
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeRoutingModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogRoutingModule) },
  { path: 'mystory', loadChildren: () => import('./lifestory/lifestory.module').then(m => m.LifeStoryRoutingModule) },
  { path: 'tips', loadChildren: () => import('./tips/tips.module').then(m => m.TipsRoutingModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactRoutingModule) },
  { path: 'pictures', loadChildren: () => import('./pictures/pictures.module').then(m => m.PicturesRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
