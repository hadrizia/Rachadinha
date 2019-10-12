import { Component, OnInit } from '@angular/core';

import { Deputado } from '../models/deputado.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  deputados: Deputado[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDeputados().subscribe(deputados => {
      this.deputados = deputados.sort((a, b) => {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
      });
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
