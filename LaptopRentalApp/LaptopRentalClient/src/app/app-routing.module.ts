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
    {path:'',redirectTo:'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
