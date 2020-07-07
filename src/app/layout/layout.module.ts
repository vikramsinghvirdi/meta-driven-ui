import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnLayoutComponent } from './components/column-layout/column-layout.component';
import { DynamicModule } from 'ng-dynamic-component';


@NgModule({
  declarations: [ColumnLayoutComponent],
  imports: [
    CommonModule,
    DynamicModule
  ]
})
export class LayoutModule { }
