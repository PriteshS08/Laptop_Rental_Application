import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserCatalogueComponent } from './browser-catalogue.component';

describe('BrowserCatalogueComponent', () => {
  let component: BrowserCatalogueComponent;
  let fixture: ComponentFixture<BrowserCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
