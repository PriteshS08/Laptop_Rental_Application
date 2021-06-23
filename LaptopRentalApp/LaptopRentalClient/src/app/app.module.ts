import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { MenuComponent } from './Component/menu/menu.component';
import { LoginService } from './Service/login.service';
import { SignupService } from './Service/signup.service';
import { ForgotpasswordService } from './Service/forgotpassword.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewDevicesComponent } from './Component/view-devices/view-devices.component';
import { HomeComponent } from './Component/home/home.component';
import { EditDeviceComponent } from './Component/edit-device/edit-device.component';
import { LenderUIComponent } from './Component/lender-ui/lender-ui.component';
import { CustomerUIComponent } from './Component/customer-ui/customer-ui.component';
import { AddDeviceComponent } from './Component/add-device/add-device.component';
import { ViewDetailsComponent } from './Component/view-details/view-details.component';
import { ViewRequestComponent } from './Component/view-request/view-request.component';
import { BrowserCatalogueComponent } from './Component/browser-catalogue/browser-catalogue.component';
import { DeviceService } from './Service/device.service';
import { RequestService } from './Service/request.service';
import { OverDueComponent } from './Component/over-due/over-due.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { GetAllRequestComponent } from './Component/get-all-request/get-all-request.component';
import { ViewOverDueDetailsComponent } from './Component/view-over-due-details/view-over-due-details.component';
import { EarningReportComponent } from './Component/earning-report/earning-report.component';
import { ViewRentedDeviceComponent } from './Component/view-rented-device/view-rented-device.component';
import { RequestStatusComponent } from './Component/request-status/request-status.component';



@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    AddDeviceComponent,
    ViewDevicesComponent,
    EditDeviceComponent,
    HomeComponent,
    LenderUIComponent,
    CustomerUIComponent,
    ViewDetailsComponent,
    ViewRequestComponent,
    BrowserCatalogueComponent,
    OverDueComponent,
    FeedbackComponent,
    GetAllRequestComponent,
   
    ViewOverDueDetailsComponent,

    RequestStatusComponent,

    GetAllRequestComponent,
    EarningReportComponent,
    ViewRentedDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  providers: [LoginService, SignupService, ForgotpasswordService, DeviceService, RequestService],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
