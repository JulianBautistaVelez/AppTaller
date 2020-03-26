import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosIngresosChartComponent } from './gastos-ingresos-chart.component';

describe('GastosIngresosChartComponent', () => {
  let component: GastosIngresosChartComponent;
  let fixture: ComponentFixture<GastosIngresosChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosIngresosChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosIngresosChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
