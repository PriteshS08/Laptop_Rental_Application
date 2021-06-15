import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from 'src/app/Service/forgotpassword.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  PasswordUpdate!:FormGroup;
  confirmpassword:string="";
  submitted : boolean=false;
  constructor(private formBuilder:FormBuilder,private fs : ForgotpasswordService) { }

  ngOnInit(): void {
    this.PasswordUpdate=this.formBuilder.group({
      password : ['', [Validators.compose([Validators.required])]],
      confirmpassword : ['', [Validators.compose([Validators.required])]]
     
  });
}

  get f() { return this.PasswordUpdate.controls; }

  passwordUpdate(){
    this.confirmpassword = this.PasswordUpdate.get("confirmpassword")?.value;
    this.fs.UpdatePassword(this.confirmpassword);
  
  }

}
