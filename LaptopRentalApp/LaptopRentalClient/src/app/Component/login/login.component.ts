import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import { User } from 'src/app/Types/User';
import { MenuComponent } from '../menu/menu.component';

@Injectable({ 
  providedIn: 'root'
 })
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //email : string = "";
  submitted : boolean =  false;
  loginForm= new FormGroup({});
  flag: any;
  //checkStatus : boolean = false;
  selectedType: string = '';
  userID! : number;
  user! : User;
  constructor(private ls : LoginService, 
    private router: Router,
    private menu : MenuComponent,
    public formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.compose([Validators.required, Validators.pattern( "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")])]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
       });
  }
  get f() { return this.loginForm.controls; }
  // selectChangeHandler (event: any) {
  //   this.selectedType = event.target.value;
  // }
 Login() 
 {
  //this.email = this.loginForm.get("email")?.value as string;
  this.submitted = true;
  const userDetails = {
   EmailId:this.loginForm.get("email")?.value,
    Password: this.loginForm.get('password')?.value
  }
  this.ls.Validate(userDetails)
      .subscribe(
        (res:any) => {
          if(res) {
            this.ls.isAuthenticated(true);
            this.flag=res;
            this.user = res;
            window.localStorage.setItem('user',JSON.stringify(res));
            this.router.navigate(['/home']);
          
           
            this.userID = res.UserId;
           
           
          //this.getUser();
           }
        },
        (err:any) => {
          this.ls.isAuthenticated(false);
          alert('Invalid username/password');
        }
      );
    //this.loginForm.reset();
  }

  // getUser() {
  //   console.log("user : ",this.user);
  //   this.ls.GetUserID(this.user);
    
  // }

// CheckStatus(emailID : string) {
  
//   this.ls.loginStatus(emailID).subscribe((res: number)  => {this.userID = res});
// }

createacc() {
  this.router.navigate(['/signup']);
}

check(){
this.menu.checkStatus(this.flag);
  }
}
