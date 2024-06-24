import { Component } from '@angular/core';
import {NzGraphComponent} from "ng-zorro-antd/graph";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent extends NzGraphComponent{

}
