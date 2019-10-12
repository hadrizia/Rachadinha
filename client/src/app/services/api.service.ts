import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Deputado } from 'src/app/models/deputado.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDeputados() {
    return this.http.get<Deputado[]>(this.url + 'deputados');
  }

  getNodes() {
    return this.http.get(this.url + 'nodes');
  }

  getLinks() {
    return this.http.get(this.url + 'links');
  }

}
