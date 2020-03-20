import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMovimientoComponent } from './insert-movimiento.component';

describe('InsertMovimientoComponent', () => {
  let component: InsertMovimientoComponent;
  let fixture: ComponentFixture<InsertMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
