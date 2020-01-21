import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {FormsModule} from '@angular/forms';
import { AddOnComponent } from './add-on/add-on.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
import { AlertModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AddOnComponent,
    CustomerInformationComponent,
    ConfirmPageComponent,
     SelectLocationComponent,MembershipRegistrationComponent,
     SelectLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),TimepickerModule.forRoot(),FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
