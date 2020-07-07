import { Injectable } from '@angular/core';
import { ColumnLayoutComponent } from '../components/column-layout/column-layout.component';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  getLayout(widgetId: string): any{
    switch (widgetId){
      case 'ColumnLayoutComponent' : return ColumnLayoutComponent;
    }
  }
}
