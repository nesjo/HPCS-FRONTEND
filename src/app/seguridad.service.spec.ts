import { TestBed } from '@angular/core/testing';

import { seguridadService } from './seguridad.service';

describe('seguridadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: seguridadService = TestBed.get(seguridadService);
    expect(service).toBeTruthy();
  });
});
