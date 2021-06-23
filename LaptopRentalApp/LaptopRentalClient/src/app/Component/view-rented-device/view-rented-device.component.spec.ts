import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentedDeviceComponent } from './view-rented-device.component';

describe('ViewRentedDeviceComponent', () => {
  let component: ViewRentedDeviceComponent;
  let fixture: ComponentFixture<ViewRentedDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRentedDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRentedDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
