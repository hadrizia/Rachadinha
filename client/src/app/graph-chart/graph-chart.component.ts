import { Component, AfterContentInit, Input, SimpleChanges } from '@angular/core';

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
    this.width = 600;
    this.height = 400;
    this.margin = {
      left: 0,
      right: 20,
      top: 60,
      bottom: 20
    };
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      typeof changes.data !== 'undefined' &&
      typeof changes.data.currentValue !== 'undefined'
    ) {
      this.data = JSON.parse(JSON.stringify(changes.data.currentValue));
      this.drawVis();
    }
  }

  initChart() {
    this.svg = d3
      .select('#graph-chart')
      .append('svg')
      .attr('version', '1.1')
      .attr('xmlns:svg', 'http://www.w3.org/2000/svg')
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .attr('viewBox', '0 0 ' + this.width + ' ' + this.height);
  }

  drawVis() {
    const links = this.data.links.map(d => Object.create(d));
    const nodes = this.data.nodes.map(d => Object.create(d));

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    const link = this.svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    const node = this.svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("id", (d) => d.nome)
      .attr("fill", (d) => color(d));

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });
  }

}