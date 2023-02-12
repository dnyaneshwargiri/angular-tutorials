import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  {
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
