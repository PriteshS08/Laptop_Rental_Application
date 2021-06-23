import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { CustomerUIComponent } from './Component/customer-ui/customer-ui.component';
import { LenderUIComponent } from './Component/lender-ui/lender-ui.component';
import { EditDeviceComponent } from './Component/edit-device/edit-device.component';
import { AddDeviceComponent } from './Component/add-device/add-device.component';
import { ViewDevicesComponent } from './Component/view-devices/view-devices.component';
import { ViewRequestComponent } from './Component/view-request/view-request.component';
import { MakeRequestComponent } from './Component/make-request/make-request.component';
import { BrowserCatalogueComponent } from './Component/browser-catalogue/browser-catalogue.component';
import { EarningReportComponent } from './Component/earning-report/earning-report.component';
import { OverDueComponent } from './Component/over-due/over-due.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { ViewRentedDeviceComponent } from './Component/view-rented-device/view-rented-device.component';

const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'signup' , component : SignupComponent},
    {path : 'customer' , component : CustomerUIComponent},
    {path : 'lender' , component : LenderUIComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'editdevice' , component : EditDeviceComponent},
    {path : 'adddevice' , component : AddDeviceComponent},
    {path : 'fpassword' , component : ForgotPasswordComponent},
    {path : 'viewdevice' , component : ViewDevicesComponent},
    {path : 'viewrequest' , component : ViewRequestComponent},
    {path : 'makerequest' , component : MakeRequestComponent},
    {path : 'catalogue' , component : BrowserCatalogueComponent},
    {path : 'earningreport' , component : EarningReportComponent},
    {path : 'overdue' , component : OverDueComponent},
    {path : 'feedback' , component : FeedbackComponent},
    {path : 'viewrented' , component : ViewRentedDeviceComponent},
    {path:'',redirectTo:'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
