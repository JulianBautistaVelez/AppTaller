import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDineroComponent } from './ver-dinero.component';

describe('VerDineroComponent', () => {
  let component: VerDineroComponent;
  let fixture: ComponentFixture<VerDineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
