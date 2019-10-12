import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

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
  public deputado: Deputado;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDeputados().subscribe(deputados => {
      this.deputados = deputados.sort((a, b) => {
        if (a.nome < b.nome) { return -1; }
        if (a.nome > b.nome) { return 1; }
        return 0;
      });
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.deputados.filter(v => v.nome.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (result: Deputado) => result.nome;

}
