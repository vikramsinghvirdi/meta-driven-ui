import { Injectable } from '@angular/core';
import { DataGridComponent } from '../components/data-grid/data-grid.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { RadarChartComponent } from '../components/radar-chart/radar-chart.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetLibraryService {

  constructor() { }

  getWidget(widgetId: string): any{
    switch (widgetId){
      case 'DataGridComponent' : return DataGridComponent;
      case 'PieChartComponent' : return PieChartComponent;
      case 'RadarChartComponent' : return RadarChartComponent;
      case 'BarChartComponent': return BarChartComponent;
    }
  }
}
