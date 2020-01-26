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
import { ReturnComponent } from './return/return.component';



const routes: Routes = [{path:'',component:HomepageComponent},
{path:'customerInformation',component:CustomerInformationComponent},
{path:'homePage',component:HomepageComponent},
{path:'confirmPage',component:ConfirmPageComponent},
{path:'addOn',component:AddOnComponent},
{path:'selectLocation',component:SelectLocationComponent},
{path:'membershipRegistration',component:MembershipRegistrationComponent},
{path:'vehicleSelection',component:VehicleSelectionComponent},
{path:'testing',component:TestingComponent},
{path:'userLogin',component:LoginPageComponent},
{path:'testing/:code',component:TestingComponent},
{path:'handOver',component:HandoverComponent},{path:'return',component:ReturnComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
