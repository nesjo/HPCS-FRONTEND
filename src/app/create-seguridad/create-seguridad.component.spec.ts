import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeguridadComponent } from './create-seguridad.component';

describe('CreateSeguridadComponent', () => {
  let component: CreateSeguridadComponent;
  let fixture: ComponentFixture<CreateSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
