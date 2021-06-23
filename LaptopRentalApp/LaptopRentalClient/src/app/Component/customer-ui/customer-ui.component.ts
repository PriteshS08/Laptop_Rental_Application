import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css']
})
export class CustomerUIComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  viewCatalogue() {
    this.route.navigate(['/catalogue'])
  }
  viewRequest() {
    this.route.navigate(['/viewrequest'])
  }
  viewRentedDevice() {
    this.route.navigate(['/viewrented'])
  }
  viewRatings() {
    this.route.navigate(['/feedback'])
  }
}
