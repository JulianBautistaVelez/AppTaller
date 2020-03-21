import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFacturaComponent } from './insert-factura.component';

describe('InsertFacturaComponent', () => {
  let component: InsertFacturaComponent;
  let fixture: ComponentFixture<InsertFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
