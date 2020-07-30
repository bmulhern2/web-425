import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';
import { IComposer } from './composer.interface'

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
