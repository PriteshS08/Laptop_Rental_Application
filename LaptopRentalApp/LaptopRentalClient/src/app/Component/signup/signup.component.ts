import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/Service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usersignup : boolean = false;
  fileToUpload!: File ;
  submitted : boolean =  false;
  signupForm= new FormGroup({});
  constructor(
    public formBuilder:FormBuilder, 
    private router: Router,
    private ss : SignupService) { 
      this.usersignup = true;
    }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      Name : ['', [Validators.compose([Validators.required,Validators.minLength(8)])]],
      Gender : ['', [Validators.compose([Validators.required])]],
      DOB : ['', [Validators.compose([Validators.required,Validators.pattern("^(?:1[8-9]|[2-5][0-9]|60)$")])]],
      Age : ['', [Validators.compose([Validators.required])]],
      Location : ['', [Validators.compose([Validators.required])]],
      PhoneNO : ['', [Validators.compose([Validators.required,Validators.pattern("^([0-9]{10})$")])]],
      Id_No : ['', [Validators.compose([Validators.required])]],
      EmailId: ['', [Validators.compose([Validators.required, Validators.pattern( "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"), Validators.minLength(1)])]],
      PassWord: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      conpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],   
    });
  } 
  onSelectFile(event : any) {  
   this.fileToUpload = <File>event.target.files[0];
   }  
  get f() { return this.signupForm.controls; }
  Signup() 
 {
  this.submitted = true;
  const imageproof = new FormData();
  imageproof.append('image', this.fileToUpload, this.fileToUpload.name);
  const userDetails = {
    Name : this.signupForm.get("Name")?.value,
    Gender : this.signupForm.get("Gender")?.value,
    DOB :  this.signupForm.get("DOB")?.value as Date, 
    Age : this.signupForm.get("Age")?.value,
    Location : this.signupForm.get("Location")?.value,
    PhoneNO : this.signupForm.get("PhoneNO")?.value,
    IdProof : imageproof,
    Id_No : this.signupForm.get("Id_No")?.value,
    EmailId:this.signupForm.get("EmailId")?.value,
    PassWord: this.signupForm.get('PassWord')?.value
  }
  this.ss.AddUserDetails(userDetails).subscribe(result => {
    this.router.navigate(['/login']);
  });  
  }
}



