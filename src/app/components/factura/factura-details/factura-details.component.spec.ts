import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDetailsComponent } from './factura-details.component';

describe('FacturaDetailsComponent', () => {
  let component: FacturaDetailsComponent;
  let fixture: ComponentFixture<FacturaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
