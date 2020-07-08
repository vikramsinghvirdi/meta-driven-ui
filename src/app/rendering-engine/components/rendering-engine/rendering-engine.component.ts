import { Component, OnInit } from '@angular/core';
import { RenderingEngineService } from '../../services/rendering-engine.service';
import { DataGridComponent } from 'src/app/widget-library/components/data-grid/data-grid.component';
import { WidgetLibraryService } from 'src/app/widget-library/services/widget-library.service';
import { LayoutService } from 'src/app/layout/services/layout.service';
import { Page } from '../../models/page';


@Component({
  selector: 'app-rendering-engine',
  templateUrl: './rendering-engine.component.html',
  styleUrls: ['./rendering-engine.component.scss']
})
export class RenderingEngineComponent implements OnInit {

  public pageJSON: Page;
  public sections: any[] = [];
  public inputs;
  constructor(private renderingEngineService: RenderingEngineService,
              private widgetLibraryService: WidgetLibraryService,
              private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.renderingEngineService.getPageJSON().subscribe(p => {
      this.pageJSON = p;
      console.log(p);
      if (p.sections) {
        p.sections.forEach(s => {
          const sectionItems = [];
          s.items.forEach(i => {
            sectionItems.push({
              component: this.widgetLibraryService.getWidget(i.widget),
              classes: i.classes,
              inputs: i.settings
            });
          });
          this.sections.push({
            component: this.layoutService.getLayout(s.layoutType),
            inputs: {
              items: sectionItems,
              classes: s.classes,
            }
          });
        });
      }
    });
  }

}
