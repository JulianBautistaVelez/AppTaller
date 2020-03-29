import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoDetailsComponent } from './movimiento-details.component';

describe('MovimientoDetailsComponent', () => {
  let component: MovimientoDetailsComponent;
  let fixture: ComponentFixture<MovimientoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
