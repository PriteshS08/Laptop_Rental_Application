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
fileToUpload!: File ;
status : string = "Available";
constructor(private formBuilder : FormBuilder, private device : DeviceService) { }

  ngOnInit(): void {

     this.AddDeviceDetails=this.formBuilder.group({
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

    get f() { return this.AddDeviceDetails.controls; }
  
    AddDetail(){
      const deviceImage = new FormData();
      deviceImage.append('image', this.fileToUpload, this.fileToUpload.name);
      const Details = {
        IMEINumber : this.AddDeviceDetails.get("IMEINumber")?.value as string,
        DeviceName : this.AddDeviceDetails.get("DeviceName")?.value as string,
        DeviceSpecification : this.AddDeviceDetails.get(" DeviceSpecification")?.value as string,
        PreInstalledSoftware : this.AddDeviceDetails.get("PreInstalledSoftware")?.value as string,
        DeviceImage : deviceImage,
        RentalAmount : this.AddDeviceDetails.get("RentalAmount")?.value,
        MaxRentalMonth : this.AddDeviceDetails.get(" MaxRentalMonth")?.value as number,
        Interest:this.AddDeviceDetails.get("Interest")?.value,
        Status : this.status
      }
  
      this.device.addDeviceDetails(Details).subscribe(
        response=>{alert('Added successfully')},
        error=>{alert('Failed')}
    
    );}


  }


