import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOverDueDetailsComponent } from './view-over-due-details.component';

describe('ViewOverDueDetailsComponent', () => {
  let component: ViewOverDueDetailsComponent;
  let fixture: ComponentFixture<ViewOverDueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOverDueDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOverDueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
