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
<<<<<<< HEAD
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
=======
import { CustomerInformationComponent } from './customer-information/customer-information.component';
>>>>>>> 0b212cb379958de280d8c486cb572ef2499e997a
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    ConfirmPageComponent
=======
    CustomerInformationComponent
>>>>>>> 0b212cb379958de280d8c486cb572ef2499e997a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),TimepickerModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
