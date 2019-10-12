import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  deputados: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDeputados().subscribe(deputados => {
      this.deputados = deputados;
    });
    
    this.apiService.getNodes().subscribe(nodes => {
      this.apiService.getLinks().subscribe(links => {

        this.data = {
          nodes: nodes,
          links: links
        }

      })
    })
  }

}
