import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from 'src/app/Service/forgotpassword.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  PasswordUpdate!:FormGroup;
  confirmpassword:string="";
  submitted : boolean=false;
  email : string ="";
  constructor(private formBuilder:FormBuilder,
    private lc : LoginComponent,
    private fs : ForgotpasswordService) { }

  ngOnInit(): void {
    this.PasswordUpdate=this.formBuilder.group({
      password : ['', [Validators.compose([Validators.required])]],
      confirmpassword : ['', [Validators.compose([Validators.required])]]
     
  });
}

  get f() { return this.PasswordUpdate.controls; }

  passwordUpdate(){
    const comp = {
      userid : this.lc.userID,
      password : this.confirmpassword = this.PasswordUpdate.get("confirmpassword")?.value as string
    }
   
    this.fs.UpdatePassword(comp).subscribe(response => {alert('Password updated successfully')},
    error => {alert('Failed to update password')});
  
  }

}
