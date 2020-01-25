import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddOnComponent } from './add-on/add-on.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';
import { TestingComponent } from './testing/testing.component';
import { HandoverComponent } from './handover/handover.component';

import { LoginPageComponent } from './login-page/login-page.component';



const routes: Routes = [{path:'',component:HomepageComponent},
{path:'customerInformation',component:CustomerInformationComponent},
{path:'homePage',component:HomepageComponent},
{path:'confirmPage/:code',component:ConfirmPageComponent},
{path:'addOn',component:AddOnComponent},
{path:'selectLocation',component:SelectLocationComponent},
{path:'membershipRegistration',component:MembershipRegistrationComponent},
{path:'vehicleSelection',component:VehicleSelectionComponent},
<<<<<<< HEAD
{path:'testing',component:TestingComponent},
{path:'userLogin',component:LoginPageComponent},
=======
{path:'testing/:code',component:TestingComponent},
>>>>>>> 945e8e1fed8575b2b41de72e215ffe7bcb0af8e7
{path:'handOver',component:HandoverComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
