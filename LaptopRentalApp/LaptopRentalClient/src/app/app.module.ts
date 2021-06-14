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

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService, SignupService, ForgotpasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
