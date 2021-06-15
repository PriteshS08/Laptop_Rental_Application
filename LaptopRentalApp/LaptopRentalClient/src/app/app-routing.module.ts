import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
