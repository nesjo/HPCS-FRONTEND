import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadListComponent } from './seguridad-list.component';

describe('SeguridadListComponent', () => {
  let component: SeguridadListComponent;
  let fixture: ComponentFixture<SeguridadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
