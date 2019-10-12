import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DeputadoComponent } from './deputado/deputado.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "deputado/:id", component: DeputadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
