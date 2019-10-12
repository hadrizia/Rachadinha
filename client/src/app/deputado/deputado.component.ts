import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deputado',
  templateUrl: './deputado.component.html',
  styleUrls: ['./deputado.component.scss']
})
export class DeputadoComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }

}
