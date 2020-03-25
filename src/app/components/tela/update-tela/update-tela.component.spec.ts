import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTelaComponent } from './update-tela.component';

describe('UpdateTelaComponent', () => {
  let component: UpdateTelaComponent;
  let fixture: ComponentFixture<UpdateTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
