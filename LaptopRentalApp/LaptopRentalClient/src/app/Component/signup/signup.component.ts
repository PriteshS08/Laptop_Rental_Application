import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // imageUrl: string | undefined;  
  // fileToUpload!: File;
  submitted : boolean =  false;
  signupForm= new FormGroup({});
  constructor(
    public formBuilder:FormBuilder, 
    private ss : SignupService) { 
    }
  // @ViewChild('logoInput', {  
  //   static: true  
  // }) logoInput: any;  
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name : ['', [Validators.compose([Validators.required,Validators.minLength(8)])]],
      dob : ['', [Validators.compose([Validators.required,Validators.pattern("^(?:1[8-9]|[2-5][0-9]|60)$")])]],
      age : ['', [Validators.compose([Validators.required])]],
      gender : ['', [Validators.compose([Validators.required])]],
      location : ['', [Validators.compose([Validators.required])]],
      phoneno : ['', [Validators.compose([Validators.required,Validators.pattern("^([0-9]{10})$")])]],
      idProof : ['', [Validators.compose([Validators.required])]],
      email: ['', [Validators.compose([Validators.required, Validators.pattern( "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"), Validators.minLength(1)])]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      conpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],   
    });
  } 
  // onSelectFile(file) {  
  //   this.fileToUpload = file;  
  //   var reader = new FileReader();  
  //   reader.onload = (event: any) => {  
  //       this.imageUrl = event.target.result;  
  //   }  
  //   reader.readAsDataURL(this.fileToUpload); 
  // }
  get f() { return this.signupForm.controls; }
  Signup() 
 {
  this.submitted = true;
  const user = {
    name : this.signupForm.get("name")?.value,
    gender : this.signupForm.get("gender")?.value,
    dob : this.signupForm.get("dob")?.value,
    age : this.signupForm.get("age")?.value,
    location : this.signupForm.get("location")?.value,
    phoneno : this.signupForm.get("phoneno")?.value,
    idno : this.signupForm.get("idno")?.value,
    //idProof : this.signupForm.get(this.logoInput.nativeElement?.files?.items(0))?.value,
    email:this.signupForm.get("email")?.value,
    password: this.signupForm.get('password')?.value
  }
  this.ss.AddUserDetails(user).subscribe(result => {});  
  this.signupForm.reset();
  }
}



