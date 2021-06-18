import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Service/login.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Injectable({ 
  providedIn: 'root'
 })
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'Laptop Rental Application';
  userLoggedIn : boolean = false;
  subs: Subscription = new Subscription;
  flag1:string="";
  usersignupcheck : boolean =false;
  constructor(
  private signup : SignupComponent,
  private ls:LoginService,
  private router: Router,
 // private lc : LoginComponent
  ){
    this.usersignupcheck = this.signup.usersignup;
  }
ngOnInit(){
  this.router.navigate([''])
  this.subs = this.ls.OnLoggedIn.subscribe(res => this.userLoggedIn = res);
  // if (this.userLoggedIn == true)
  // {
  //   this.lc.CheckStatus();
  // }
}
logoutCheck(){
  this.flag1="false";
}
checkStatus(flag:any){
this.flag1= flag;
}
ngOnDestroy(): void {
    this.subs.unsubscribe();
   }

}