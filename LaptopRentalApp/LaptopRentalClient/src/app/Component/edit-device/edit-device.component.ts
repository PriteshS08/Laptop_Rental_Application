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
  UpdateDetailform!: FormGroup;
  constructor(private formBuilder:FormBuilder,private device: DeviceService) {
    
   }


  ngOnInit(): void {
      this.UpdateDetailform=this.formBuilder.group({
      ImeiNumber : ['', [Validators.compose([Validators.required])]],
      DeviceName : ['', [Validators.compose([Validators.required])]],
      DeviceSpecification : ['', [Validators.compose([Validators.required])]],
      PreInstalledSoftware : ['', [Validators.compose([Validators.required])]],
      UploadDeviceImage : ['', [Validators.compose([Validators.required])]],
      RentalAmountMonth : ['', [Validators.compose([Validators.required])]],
      MaximumRentalMonths : ['', [Validators.compose([Validators.required])]],
      Interest: ['', [Validators.compose([Validators.required])]]
     
    });
  } 
 
  get f() { return this.UpdateDetailform.controls; }
  
  UpdateDetail(){
    const Details = {
      ImeiNumber : this.UpdateDetailform.get("ImeiNumber")?.value,
      DeviceName : this.UpdateDetailform.get("DeviceName")?.value,
      DeviceSpecification : this.UpdateDetailform.get(" DeviceSpecification")?.value,
      PreInstalledSoftware : this.UpdateDetailform.get("PreInstalledSoftware")?.value,
      UploadDeviceImage : this.UpdateDetailform.get(" UploadDeviceImage")?.value,
      RentalAmountMonth : this.UpdateDetailform.get("RentalAmountMonth")?.value,
      MaximumRentalMonths : this.UpdateDetailform.get(" MaximumRentalMonths")?.value,
      Interest:this.UpdateDetailform.get("Interest")?.value,
     
    }

    this.submitted = true;
    this.device.updateDeviceDetails(Details).subscribe(
      response=>{alert('Update successfull')},
      error=>{alert('Failed')}
  
  );
  }
  

}
