import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTelasComponent } from './listar-telas.component';

describe('ListarTelasComponent', () => {
  let component: ListarTelasComponent;
  let fixture: ComponentFixture<ListarTelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
