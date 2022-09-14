import { TestBed } from '@angular/core/testing';

import { AngularFlowchartService } from './angular-flowchart.service';

describe('AngularFlowchartService', () => {
  let service: AngularFlowchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFlowchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
