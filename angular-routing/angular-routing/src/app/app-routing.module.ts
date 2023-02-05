import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view-1/view-1.component';
import { View2Component } from './view-2/view-2.component';
import { View3Component } from './view-3/view-3.component';


const routes: Routes = [
  { path: 'login', component: View1Component },
  { path: 'contact', component: View2Component },
  { path: 'careers', component: View3Component },
  { path: '*', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }