import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderingEngineComponent } from './components/rendering-engine/rendering-engine.component';
import { WidgetLibraryModule } from '../widget-library/widget-library.module';
import { DynamicModule } from 'ng-dynamic-component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [RenderingEngineComponent],
  imports: [
    CommonModule,
    WidgetLibraryModule,
    DynamicModule,
    LayoutModule
  ],
  exports: [
    RenderingEngineComponent
  ]
})
export class RenderingEngineModule { }
