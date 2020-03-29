import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDineroComponent } from './transfer-dinero.component';

describe('TransferDineroComponent', () => {
  let component: TransferDineroComponent;
  let fixture: ComponentFixture<TransferDineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
