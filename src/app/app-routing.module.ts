import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the main component from each module
import { HomepageComponent } from './home/homepage/homepage.component';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { MystorypageComponent } from './lifestory/mystorypage/mystorypage.component';
import { TipspageComponent } from './tips/tipspage/tipspage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'about', loadChildren: () => import('./lifestory/lifestory.module').then(m => m.LifestoryModule) },
  { path: 'tips', loadChildren: () => import('./tips/tips.module').then(m => m.TipsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
