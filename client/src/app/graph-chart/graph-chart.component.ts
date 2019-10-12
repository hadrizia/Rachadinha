import { Component, AfterContentInit, Input } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-graph-chart',
  template: '<div id="graph-chart"></div>',
  styleUrls: ['./graph-chart.component.scss']
})
export class GraphChartComponent implements AfterContentInit {

  @Input() data: any;

  width: number;
  height: number;
  margin: any;

  svg: any;

  constructor() { }

  ngAfterContentInit() {
    this.width = 500;
    this.height = 600;
    this.margin = {
      left: 0,
      right: 20,
      top: 60,
      bottom: 20
    };
    this.initChart();
  }

  initChart() {
    this.svg = d3
      .select('#graph-chart')
      .append('svg')
      .attr('version', '1.1')
      .attr('xmlns:svg', 'http://www.w3.org/2000/svg')
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .attr('viewBox', '0 0 ' + this.width + ' ' + this.height);

    console.log(this.data);
    
  }

}
