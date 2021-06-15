import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'signup' , component : SignupComponent},
    {path : 'customer' , component : LoginComponent},
    {path : 'lender' , component : SignupComponent},
    {path : 'home' , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
