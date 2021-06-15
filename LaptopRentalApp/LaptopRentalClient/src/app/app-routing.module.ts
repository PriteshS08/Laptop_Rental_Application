import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDeviceComponent } from './Component/edit-device/edit-device.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { CustomerUIComponent } from './Component/customer-ui/customer-ui.component';
import { LenderUIComponent } from './Component/lender-ui/lender-ui.component';

const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'signup' , component : SignupComponent},
    {path : 'customer' , component : CustomerUIComponent},
    {path : 'lender' , component : LenderUIComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'fpassword' , component : ForgotPasswordComponent},
    {path : 'editdevice' , component : EditDeviceComponent},
    // {path : 'deletedevice' , component : ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
