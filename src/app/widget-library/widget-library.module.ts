import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ClarityModule } from '@clr/angular';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [DataGridComponent, PieChartComponent, RadarChartComponent, BarChartComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ClarityModule,
    ChartsModule
  ]
})
export class WidgetLibraryModule { }
