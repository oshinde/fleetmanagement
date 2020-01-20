import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';


const routes: Routes = [{path:'',component:HomepageComponent},{path:'abc',component:CustomerInformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
