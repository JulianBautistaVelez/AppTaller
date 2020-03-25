import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTelaComponent } from './insert-tela.component';

describe('InsertTelaComponent', () => {
  let component: InsertTelaComponent;
  let fixture: ComponentFixture<InsertTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
