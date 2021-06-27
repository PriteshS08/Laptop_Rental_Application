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
import { RequestStatusComponent } from './Component/request-status/request-status.component';
import { GetAllRequestComponent } from './Component/get-all-request/get-all-request.component';
import { ViewRentedDevicesComponent } from './Component/view-rented-devices/view-rented-devices.component';
import { ViewDetailsComponent } from './Component/view-details/view-details.component';
import { FeedbackcatalogueComponent } from './Component/feedbackcatalogue/feedbackcatalogue.component';
import { ViewfeedbackComponent } from './Component/viewfeedback/viewfeedback.component';
import { ViewOverDueDetailsComponent } from './Component/view-over-due-details/view-over-due-details.component';
import { ReturnComponent } from './Component/return/return.component';


const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'signup' , component : SignupComponent},
    {path : 'customer' , component : CustomerUIComponent},
    {path : 'lender' , component : LenderUIComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'editdevice /: id' , component : AddDeviceComponent},
    {path : 'adddevice' , component : AddDeviceComponent},
    {path : 'fpassword' , component : ForgotPasswordComponent},
    {path : 'viewdevice' , component : ViewDevicesComponent},
    {path : 'viewdetails' , component : ViewDetailsComponent},
    {path : 'viewrequest' , component : ViewRequestComponent},
    {path : 'requeststatus' , component : RequestStatusComponent},
    {path : 'makerequest' , component : MakeRequestComponent},
    {path : 'catalogue' , component : BrowserCatalogueComponent},
    {path : 'earningreport' , component : EarningReportComponent},
    {path : 'overdue' , component : OverDueComponent},
    {path : 'feedback' , component : FeedbackComponent}, 
    {path : 'viewrented' , component : ViewRentedDevicesComponent},
    {path : 'getallrequest' , component : GetAllRequestComponent},
    {path : 'viewrented' , component : ViewRentedDevicesComponent},
    {path : 'feedbackcatalogue' , component : FeedbackcatalogueComponent},
    {path : 'viewfeed' , component : ViewfeedbackComponent},
    {path : 'due' , component : ViewOverDueDetailsComponent},
    {path : 'return' , component : ReturnComponent},
    {path:'',redirectTo:'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot([
    {path: 'viewdevice', component:ViewDevicesComponent}
  ],{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
