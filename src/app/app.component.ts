import {AfterViewInit, Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  NzGraphComponent,
  NzGraphData,
  NzGraphDataDef, NzGraphEdgeDirective, NzGraphGroupNodeDirective, NzGraphNodeDirective,
  NzGraphZoomDirective,
  NzRankDirection
} from "ng-zorro-antd/graph";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {FormsModule} from "@angular/forms";
import {NzRadioComponent, NzRadioGroupComponent} from "ng-zorro-antd/radio";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonComponent, FormsModule, NzRadioGroupComponent, NzRadioComponent, NzGraphComponent, NzGraphZoomDirective, NzGraphGroupNodeDirective, NzGraphNodeDirective, NzGraphEdgeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NzGraphComponent, {static: true}) nzGraphComponent!: NzGraphComponent;
  @ViewChild(NzGraphZoomDirective, {static: true}) zoomController!: NzGraphZoomDirective;
  @ViewChild('test', {static: true}) testTemplate!: TemplateRef<any>;

  zoom = 0.5;
  testDef: NzGraphDataDef = {
    nodes: [
      {
        id: 'root',
        label: '0'
      },
      {
        id: 'label',
        label: 'Some text',
        width: 78
      },
      {
        id: '2',
        label: '2'
      },
      {
        id: '3',
        label: '3'
      },
      {
        id: '4',
        label: '4'
      },
      {
        id: '5',
        label: '5'
      },
      {
        id: '6',
        label: '6'
      },
    ],
    edges: [
      {
        v: 'root',
        w: 'label',
      },
      {
        v: 'root',
        w: '5',
      },
      {
        v: 'label',
        w: '2'
      },
      {
        v: '2',
        w: '3'
      },
      {
        v: '3',
        w: '4'
      },
      {
        v: '5',
        w: '6'
      },
    ],
  };
  rankDirection: NzRankDirection = 'TB';
  graphData = new NzGraphData(this.testDef);

  constructor() {
  }

  ngAfterViewInit(): void {

  }

  expand(name: string): void {
    this.graphData.expand(name);
  }

  collapse(name: string): void {
    this.graphData.collapse(name);
  }

  expandAll(): void {
    this.graphData.expandAll();
  }

  collapseAll(): void {
    this.graphData.collapseAll();
  }

  fit(): void {
    this.zoomController?.fitCenter();
  }

  focusNode(e: string | number): void {
    this.zoomController?.focus(e);
  }

  graphInitialized(_ele: NzGraphComponent): void {
    // Only nz-graph-zoom enabled, you should run `fitCenter` manually
    this.zoomController?.fitCenter();
  }
}
