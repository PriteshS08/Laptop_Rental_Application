import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/Service/login.service';

 
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
  private ls:LoginService,
  private router: Router,
  ){
    const json=window.localStorage.getItem('usersignup') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    this.usersignupcheck = user;
  }
ngOnInit(){
  this.router.navigate([''])
  this.subs = this.ls.OnLoggedIn.subscribe(res => this.userLoggedIn = res);
}
logoutCheck(){
  this.flag1="false";
}
checkStatus(){
  const json=window.localStorage.getItem('usersignup') as string;
  console.log('json', json);
  const user=JSON.parse(json);
  this.flag1= user;
}
ngOnDestroy(): void {
    this.subs.unsubscribe();
   }

}