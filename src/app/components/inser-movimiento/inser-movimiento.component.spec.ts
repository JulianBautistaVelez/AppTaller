import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserMovimientoComponent } from './inser-movimiento.component';

describe('InserMovimientoComponent', () => {
  let component: InserMovimientoComponent;
  let fixture: ComponentFixture<InserMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
