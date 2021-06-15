import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/Service/device.service';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
AddDeviceDetails = new FormGroup({});
submitted:boolean=false;
  constructor(private formBuilder : FormBuilder, private device : DeviceService) { }

  ngOnInit(): void {

     this.AddDeviceDetails=this.formBuilder.group({
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

    get f() { return this.AddDeviceDetails.controls; }
  
    AddDetail(){
      const Details = {
        ImeiNumber : this.AddDeviceDetails.get("ImeiNumber")?.value,
        DeviceName : this.AddDeviceDetails.get("DeviceName")?.value,
        DeviceSpecification : this.AddDeviceDetails.get(" DeviceSpecification")?.value,
        PreInstalledSoftware : this.AddDeviceDetails.get("PreInstalledSoftware")?.value,
        UploadDeviceImage : this.AddDeviceDetails.get(" UploadDeviceImage")?.value,
        RentalAmountMonth : this.AddDeviceDetails.get("RentalAmountMonth")?.value,
        MaximumRentalMonths : this.AddDeviceDetails.get(" MaximumRentalMonths")?.value,
        Interest:this.AddDeviceDetails.get("Interest")?.value,
       
      }
  
      this.device.addDeviceDetails(Details).subscribe(
        response=>{alert('Added successfully')},
        error=>{alert('Failed')}
    
    );}


  }


