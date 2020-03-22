import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacturaComponent } from './update-factura.component';

describe('UpdateFacturaComponent', () => {
  let component: UpdateFacturaComponent;
  let fixture: ComponentFixture<UpdateFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
