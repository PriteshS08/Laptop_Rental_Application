import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validator,NgForm, Validators}from '@angular/forms';
import { DeviceService } from 'src/app/Service/device.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {
  submitted : boolean = false;
  UpdateDetailform = new FormGroup({});
  fileToUpload!: File ;
  status : string = "Available";
  constructor(private formBuilder:FormBuilder,private device: DeviceService) { 
   }


  ngOnInit(): void {
    this.UpdateDetailform=this.formBuilder.group({
      IMEINumber : ['', [Validators.compose([Validators.required])]],
      DeviceName : ['', [Validators.compose([Validators.required])]],
      DeviceSpecification : ['', [Validators.compose([Validators.required])]],
      PreInstalledSoftware : ['', [Validators.compose([Validators.required])]],
      DeviceImage : ['', [Validators.compose([Validators.required])]],
      RentalAmount : ['', [Validators.compose([Validators.required])]],
      MaxRentalMonth : ['', [Validators.compose([Validators.required])]],
      Interest: ['', [Validators.compose([Validators.required])]]
     
    });
  } 
  onUploadFile(event : any) {  
    this.fileToUpload = <File>event.target.files[0];
    }  

 
  get f() { return this.UpdateDetailform.controls; }
  
  UpdateDetail(){
      const deviceDetail = new FormData();
      deviceDetail.append('image', this.fileToUpload);
      deviceDetail.append('SignUp', JSON.stringify(this.UpdateDetailform.value));
    //   const Detail = {
    //     IMEINumber : this.UpdateDetailform.get("IMEINumber")?.value as string,
    //     DeviceName : this.UpdateDetailform.get("DeviceName")?.value as string,
    //     DeviceSpecification : this.UpdateDetailform.get(" DeviceSpecification")?.value as string,
    //     PreInstalledSoftware : this.UpdateDetailform.get("PreInstalledSoftware")?.value as string,
    //     DeviceImage : DeviceImage,
    //     RentalAmount : this.UpdateDetailform.get("RentalAmount")?.value,
    //     MaxRentalMonth : this.UpdateDetailform.get(" MaxRentalMonth")?.value as number,
    //     Interest:this.UpdateDetailform.get("Interest")?.value,
    //     Status : this.status
    // }

    this.submitted = true;
    this.device.updateDeviceDetails(deviceDetail).subscribe(
      response=>{alert('Update successfull')},
      error=>{alert('Failed')}
  
  );
  }
  

}
