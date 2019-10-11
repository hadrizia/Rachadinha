import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      nodes: [
        {id: "A", group: 1},
        {id: "B", group: 1}
      ],
      links: [
        {source: "A", target: "B", value: 1}
      ]
    }
  }

}
