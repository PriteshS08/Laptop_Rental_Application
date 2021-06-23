import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lender-ui',
  templateUrl: './lender-ui.component.html',
  styleUrls: ['./lender-ui.component.css']
})
export class LenderUIComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  addDevice() {
    this.router.navigate(['/adddevice'])
  }
  viewDevice() {
    this.router.navigate(['/viewdevice'])
  }
  viewRequest() {
    this.router.navigate(['/getallrequest'])
  }
  viewReport() {
    this.router.navigate(['/earningreport'])
  }
  viewOverDue() {
    this.router.navigate(['/overdue'])
  }
  viewRatings() {
    this.router.navigate(['/feedback'])
  }

}
