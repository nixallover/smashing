/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlenderService } from './blender.service';

describe('BlenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlenderService]
    });
  });

  it('should ...', inject([BlenderService], (service: BlenderService) => {
    expect(service).toBeTruthy();
  }));
});
