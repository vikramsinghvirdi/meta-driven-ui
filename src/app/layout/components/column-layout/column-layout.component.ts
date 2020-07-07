import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss']
})
export class ColumnLayoutComponent implements OnInit {

  @Input() public items: any[] = [];
  @Input() public classes;
  constructor() { }

  ngOnInit(): void {
  }

}
