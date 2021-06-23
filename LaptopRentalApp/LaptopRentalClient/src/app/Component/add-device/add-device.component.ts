import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/Service/device.service';
import { LoginComponent } from '../login/login.component';

@Injectable({ 
  providedIn: 'root'
 })


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
AddDeviceDetails = new FormGroup({});
submitted:boolean=false;
fileToUpload!: File ;
user! : any;
status : string = "Available";
//ratings: number = 5.0;
constructor(private formBuilder : FormBuilder,
  private device : DeviceService,
  private lc : LoginComponent) { }

  ngOnInit(): void {

     this.AddDeviceDetails=this.formBuilder.group({
      IMEINumber : ['', [Validators.compose([Validators.required])]],
      DeviceName : ['', [Validators.compose([Validators.required])]],
      DeviceSpecification : ['', [Validators.compose([Validators.required])]],
      PreInstalledSoftware : ['', [Validators.compose([Validators.required])]],
     // DeviceImage : ['', [Validators.compose([Validators.required])]],
      RentalAmount : ['', [Validators.compose([Validators.required])]],
      MaxRentalMonth : ['', [Validators.compose([Validators.required])]],
      Interest: ['', [Validators.compose([Validators.required])]],
      //Ratings : ['5.0'],
     // UserId : this.lc.userID
    });
  }
  onUploadFile(event : any) {  
    this.fileToUpload = <File>event.target.files[0];
    }  

    get f() { return this.AddDeviceDetails.controls; }
  
    AddDetail(){
      this.submitted = true;
      const json=window.localStorage.getItem('user') as string;
      console.log('json', json);
      this.user=JSON.parse(json);
      const devicedetails={
        frm :this.AddDeviceDetails.value,
        UserId_FK: this.user.UserId,
        Status :this.status
      };
      console.log(devicedetails);
      const Details = new FormData();
      Details.append('image', this.fileToUpload);
      Details.append('AddDevice', JSON.stringify(devicedetails));
     

      console.log(Details);

      // const Details = {
      //   IMEINumber : this.AddDeviceDetails.get("IMEINumber")?.value as string,
      //   DeviceName : this.AddDeviceDetails.get("DeviceName")?.value as string,
      //   DeviceSpecification : this.AddDeviceDetails.get(" DeviceSpecification")?.value as string,
      //   PreInstalledSoftware : this.AddDeviceDetails.get("PreInstalledSoftware")?.value as string,
      //   DeviceImage : deviceImage,
      //   RentalAmount : this.AddDeviceDetails.get("RentalAmount")?.value,
      //   MaxRentalMonth : this.AddDeviceDetails.get(" MaxRentalMonth")?.value as number,
      //   Interest:this.AddDeviceDetails.get("Interest")?.value,
      //   Status : this.status
      // }
  
      this.device.addDeviceDetails(Details).subscribe(
        response=>{alert('Added successfully')},
        error=>{alert('Failed')}
    
    );}
    resetDetail() {
      this.AddDeviceDetails.reset();
    }

    
  }


