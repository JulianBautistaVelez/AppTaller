import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidezChartComponent } from './liquidez-chart.component';

describe('LiquidezChartComponent', () => {
  let component: LiquidezChartComponent;
  let fixture: ComponentFixture<LiquidezChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidezChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidezChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
