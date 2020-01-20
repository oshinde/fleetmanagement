import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
<<<<<<< HEAD
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';


const routes: Routes = [{path:'',component:HomepageComponent},{path:'homePage',component:HomepageComponent},{path:'confirmBooking',component:ConfirmPageComponent}];
=======
import { CustomerInformationComponent } from './customer-information/customer-information.component';


const routes: Routes = [{path:'',component:HomepageComponent},{path:'abc',component:CustomerInformationComponent}];
>>>>>>> 0b212cb379958de280d8c486cb572ef2499e997a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
