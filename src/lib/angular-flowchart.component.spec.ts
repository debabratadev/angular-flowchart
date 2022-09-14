import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFlowchartComponent } from './angular-flowchart.component';

describe('AngularFlowchartComponent', () => {
  let component: AngularFlowchartComponent;
  let fixture: ComponentFixture<AngularFlowchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFlowchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
