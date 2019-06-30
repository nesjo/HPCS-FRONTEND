import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadDetailsComponent } from './seguridad-details.component';

describe('SeguridadDetailsComponent', () => {
  let component: SeguridadDetailsComponent;
  let fixture: ComponentFixture<SeguridadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
