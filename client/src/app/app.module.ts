import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraphChartComponent } from './graph-chart/graph-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DeputadoComponent } from './deputado/deputado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphChartComponent,
    LineChartComponent,
    DeputadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
