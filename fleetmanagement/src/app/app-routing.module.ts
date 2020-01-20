import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';


const routes: Routes = [{path:'',component:HomepageComponent},{path:'homePage',component:HomepageComponent},{path:'confirmBooking',component:ConfirmPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
