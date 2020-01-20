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
import { AlertModule } from 'ngx-bootstrap';


=======
import { MembershipRegistrationComponent } from './membership-registration/membership-registration.component';
>>>>>>> 507886bb48c1a94a8e3eac3779fb025b92e94db3
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AddOnComponent,
    CustomerInformationComponent,
    ConfirmPageComponent,
<<<<<<< HEAD
     SelectLocationComponent

=======
     SelectLocationComponent,
     MembershipRegistrationComponent
>>>>>>> 507886bb48c1a94a8e3eac3779fb025b92e94db3
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
