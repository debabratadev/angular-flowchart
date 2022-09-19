import { Component, OnInit } from '@angular/core';
import { DrawingService } from './canvas/services/drawing.service';
import { InitializeService } from './canvas/services/initialize.service';

@Component({
  selector: 'db-angular-flowchart',
  template: `
  `,
  styles: [
  ]
})
export class AngularFlowchartComponent implements OnInit {

  constructor(
    private drawingService: DrawingService,
    private initializeService: InitializeService,
    ) { }

  ngOnInit(): void {
  }

  initialize(container) {
    const canvas = this.drawingService.createCanvas(container);
    this.initializeService.initialise(canvas);
  }

}
